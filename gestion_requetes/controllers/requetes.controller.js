const Requete = require('../models/requete.model');
const axios = require('axios');
const db = require('../../utils/database'); // Importez votre pool de connexions

exports.getRequetes = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM requetes');
        res.json(rows);
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
        await db.query('INSERT INTO requetes SET ?', requete); // Utilisez db.query pour l'insertion
        res.status(201).json(requete);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.mettreAJourRequete = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM requetes WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Requête non trouvée.' });
        }
        const requete = rows[0];

        // Mettre à jour la requête avec les données de la requête
        requete.nom = req.body.nom || requete.nom;
        requete.statut = req.body.statut || requete.statut;
        await db.query('UPDATE requetes SET nom = ?, statut = ? WHERE id = ?', [requete.nom, requete.statut, req.params.id]);

        // Si la requête est approuvée, envoyer une demande de mise à jour à Gestion des Dossiers
        if (requete.statut === 'approuvée') {
            try {
                const dossierResponse = await axios.post('http://localhost:3001/dossiers/modifier', {
                    idEmploye: requete.idEmploye,
                    contenu: requete.description
                });
                console.log('Dossier mis à jour avec succès:', dossierResponse.data);
            } catch (dossierError) {
                console.error('Erreur lors de la mise à jour du dossier:', dossierError.message);
                return res.status(500).json({ message: 'Erreur lors de la mise à jour du dossier.' });
            }
        }

        res.json(requete);
    } catch (err) {
        console.error('Erreur lors de la mise à jour de la requête:', err);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la requête.', error: err.message });
    }
};