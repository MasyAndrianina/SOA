// gestion_requetes/routes/requetes.routes.js

const express = require('express');
const requetesController = require('../controllers/requetes.controller');

const router = express.Router();

router.get('/', requetesController.getRequetes);
router.post('/', requetesController.createRequete);
// ... autres routes

module.exports = router;