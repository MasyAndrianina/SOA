const express = require('express');
const router = express.Router();
const dossiersController = require('../controllers/dossiersController');

router.post('/', dossiersController.creerDossier);
router.get('/:id', dossiersController.obtenirDossier);
router.put('/:id', dossiersController.mettreAJourDossier);
router.delete('/:id', dossiersController.supprimerDossier);
router.get('/employe/:idEmploye', dossiersController.obtenirDossierParEmploye);

module.exports = router;