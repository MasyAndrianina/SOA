const Dossier = require('../models/dossier');

exports.creerDossier = async (req, res) => {
    try {
        const dossier = await Dossier.create(req.body);
        res.status(201).json(dossier);
    } catch (error) {
        console.error('Erreur lors de la création du dossier:', error);
        res.status(500).json({ message: 'Erreur lors de la création du dossier.', error: error.message });
    }
};

exports.obtenirDossier = async (req, res) => {
    try {
        const dossier = await Dossier.findByPk(req.params.id);
        if (dossier) {
            res.json(dossier);
        } else {
            res.status(404).json({ message: 'Dossier non trouvé.' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération du dossier:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération du dossier.', error: error.message });
    }
};

exports.mettreAJourDossier = async (req, res) => {
    try {
        const [updated] = await Dossier.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedDossier = await Dossier.findByPk(req.params.id);
            res.json(updatedDossier);
        } else {
            res.status(404).json({ message: 'Dossier non trouvé.' });
        }
    } catch (error) {
        console.error('Erreur lors de la mise à jour du dossier:', error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du dossier.', error: error.message });
    }
};

exports.supprimerDossier = async (req, res) => {
    try {
        const deleted = await Dossier.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Dossier non trouvé.' });
        }
    } catch (error) {
        console.error('Erreur lors de la suppression du dossier:', error);
        res.status(500).json({ message: 'Erreur lors de la suppression du dossier.', error: error.message });
    }
};

exports.obtenirDossierParEmploye = async (req, res) => {
    try {
        const dossier = await Dossier.findOne({
            where: { idEmploye: req.params.idEmploye }
        });
        if (dossier) {
            res.json(dossier);
        } else {
            res.status(404).json({ message: 'Dossier non trouvé pour cet employé.' });
        }
    } catch (error) {
        console.error('Erreur lors de la récupération du dossier par employé:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération du dossier par employé.', error: error.message });
    }
};