const express = require('express');
const dotenv = require('dotenv');
const gestionRequetes = require('./gestion_requetes');
const notification = require('./notification');
const validation = require('./validation');

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use('/api', gestionRequetes);
app.use('/api', notification);
app.use('/api', validation);

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });