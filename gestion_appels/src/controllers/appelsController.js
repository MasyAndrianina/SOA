const Appel = require('../models/appel');

exports.creerAppel = async (req, res) => {
    try {
        const appel = await Appel.create(req.body);
        res.status(201).json(appel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.obtenirAppel = async (req, res) => {
    try {
        const appel = await Appel.findByPk(req.params.id);
        if (appel) {
            res.json(appel);
        } else {
            res.status(404).json({ message: 'Appel non trouvé.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.mettreAJourAppel = async (req, res) => {
    try {
        const [updated] = await Appel.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedAppel = await Appel.findByPk(req.params.id);
            res.json(updatedAppel);
        } else {
            res.status(404).json({ message: 'Appel non trouvé.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};