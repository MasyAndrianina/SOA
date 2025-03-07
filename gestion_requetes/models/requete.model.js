const db = require('../../utils/database');

class Requete {
    constructor(requete) {
        this.id = requete.id;
        this.idEmploye = requete.idEmploye;
        this.description = requete.description;
        this.dateAppel = requete.dateAppel;
        this.heureAppel = requete.heureAppel;
        this.sujetAppel = requete.sujetAppel;
    }

    static async getAll() {
        const [rows] = await db.query('SELECT * FROM requetes');
        return rows;
    }

    async save() {
        await db.query('INSERT INTO requetes SET ?', this);
    }
}

module.exports = Requete;