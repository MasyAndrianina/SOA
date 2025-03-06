const express = require('express');
const router = express.Router();
const appelantsController = require('../controllers/appelantsController');

router.post('/', appelantsController.creerAppelant); // Ajout de la route POST
router.get('/:id', appelantsController.obtenirAppelant);

module.exports = router;