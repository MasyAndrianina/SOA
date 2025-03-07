// gestion_requetes/routes/requetes.routes.js

const express = require('express');
const requetesController = require('../controllers/requetes.controller');

const router = express.Router();

router.get('/', requetesController.getRequetes);
router.post('/', requetesController.createRequete);
router.put('/:id', requetesController.mettreAJourRequete);// ... autres routes

module.exports = router;