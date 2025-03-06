const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dossier = sequelize.define('Dossier', {
    idEmploye: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    contenu: {
        type: DataTypes.TEXT
    },
    statut: {
        type: DataTypes.STRING,
        defaultValue: 'actif'
    }
});

module.exports = Dossier;