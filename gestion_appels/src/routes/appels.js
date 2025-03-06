const express = require('express');
const router = express.Router();
const appelsController = require('../controllers/appelsController');

router.post('/', appelsController.creerAppel);
router.get('/:id', appelsController.obtenirAppel);
router.put('/:id', appelsController.mettreAJourAppel);

module.exports = router;