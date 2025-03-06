const Appelant = require('../models/appelant');

exports.creerAppelant = async (req, res) => {
    try {
        const appelant = await Appelant.create(req.body);
        res.status(201).json(appelant);
    } catch (error) {
        console.error('Erreur lors de la création de l\'appelant:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la création de l\'appelant.', error: error.message }); // Message d'erreur détaillé
    }
};

exports.obtenirAppelant = async (req, res) => {
    try {
        const appelant = await Appelant.findByPk(req.params.id);
        if (appelant) {
            res.json(appelant);
        } else {
            res.status(404).json({ message: 'Appelant non trouvé.' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération de l\'appelant:', error); // Log de l'erreur
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'appelant.', error: error.message }); // Message d'erreur détaillé
    }
};