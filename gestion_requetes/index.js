// gestion_requetes/index.js

const express = require('express');
const requetesRoutes = require('./routes/requetes.routes');

const router = express.Router();

router.use('/requetes', requetesRoutes);

module.exports = router;