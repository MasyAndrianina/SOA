const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données établie.'))
    .catch(err => console.error('Impossible de se connecter à la base de données:', err));

sequelize.sync({force: true}) // ATTENTION : force: true supprime les tables existantes
    .then(() => console.log('Tables synchronisées.'))
    .catch(err => console.error('Erreur lors de la synchronisation des tables:', err));

const dossiersRoutes = require('./routes/dossiers');
app.use('/dossiers', dossiersRoutes);

app.use((err, req, res, next) => {
    console.error('Erreur globale:', err);
    res.status(500).json({ message: 'Erreur interne du serveur.', error: err.message });
});

app.listen(port, () => {
    console.log(`Serveur Gestion des Dossiers démarré sur le port ${port}`);
});