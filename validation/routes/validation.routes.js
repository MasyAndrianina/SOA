// validation/routes/validation.routes.js

const express = require('express');
const validationController = require('../controllers/validation.controller');

const router = express.Router();

router.post('/valider', validationController.validerDonnees);

module.exports = router;