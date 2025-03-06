const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Appelant = sequelize.define('Appelant', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numeroTelephone: {
        type: DataTypes.STRING
    },
    entreprise: {
        type: DataTypes.STRING
    }
});

module.exports = Appelant;