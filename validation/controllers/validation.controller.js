// validation/controllers/validation.controller.js

const Validation = require('../models/validation.model');

exports.validerDonnees = async (req, res) => {
  try {
    const validation = new Validation(req.body);
    validation.resultat = 'valide'; // ou 'invalide'

    res.status(200).json(validation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

