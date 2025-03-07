const express = require('express');
const dotenv = require('dotenv');
const gestionRequetes = require('./gestion_requetes');
const gestionRequetes = require('./notification');
const gestionRequetes = require('./validation');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', gestionRequetes);
app.use('/api', notification);
app.use('/api', validation);

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });