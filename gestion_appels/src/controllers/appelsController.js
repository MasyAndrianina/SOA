const Appel = require('../models/appel');
const axios = require('axios'); 

exports.creerAppel = async (req, res) => {
    try {
        const appel = await Appel.create(req.body);
        res.status(201).json(appel);

        // Envoi d'une requête POST à Gestion des Dossiers
        axios.post('http://localhost:3001/dossiers', { // Remplacez 3001 par le port de Gestion des Dossiers
            idEmploye: appel.idAppelant,
            contenu: 'Dossier créé automatiquement lors de l\'appel.',
            statut: 'actif'
        }).then(response => {
            console.log('Dossier créé avec succès:', response.data);
        }).catch(error => {
            console.error('Erreur lors de la création du dossier:', error.message);
        });

    } catch (error) {
        console.error('Erreur lors de la création de l\'appel:', error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'appel.', error: error.message });
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