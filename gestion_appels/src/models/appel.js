const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Appel = sequelize.define('Appel', {
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    heure: {
        type: DataTypes.TIME,
        allowNull: false
    },
    sujet: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    idAppelant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    statut: {
        type: DataTypes.STRING,
        defaultValue: 'en cours'
    }
});

module.exports = Appel;