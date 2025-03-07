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
        const requete = new Requete({
            idEmploye: req.body.idEmploye,
            description: req.body.description,
            dateAppel: req.body.dateAppel,
            heureAppel: req.body.heureAppel,
            sujetAppel: req.body.sujetAppel
        });
        await requete.save();
        res.status(201).json(requete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};