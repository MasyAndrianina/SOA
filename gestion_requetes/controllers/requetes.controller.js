// gestion_requetes/controllers/requetes.controller.js

const Requete = require('../models/requete.model');

exports.getRequetes = async (req, res) => {
  try {
    const requetes = await Requete.getAll();
    res.json(requetes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createRequete = async (req, res) => {
  try {
    const requete = new Requete(req.body);
    await requete.save();
    res.status(201).json(requete);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

