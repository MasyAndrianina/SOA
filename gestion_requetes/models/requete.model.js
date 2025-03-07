// gestion_requetes/models/requete.model.js

const db = require('../../../utils/database');

class Requete {
  constructor(requete) {
    this.id = requete.id;
    this.nom = requete.nom;
    
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