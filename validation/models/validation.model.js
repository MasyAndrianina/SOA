// validation/models/validation.model.js

class Validation {
    constructor(validation) {
      this.id = validation.id;
      this.donnees = validation.donnees;
      this.regles = validation.regles;
      this.resultat = validation.resultat;
    }

  }
  
  module.exports = Validation;