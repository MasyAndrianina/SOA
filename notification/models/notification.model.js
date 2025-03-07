// notification/models/notification.model.js

class Notification {
    constructor(notification) {
      this.id = notification.id;
      this.destinataire = notification.destinataire;
      this.message = notification.message;
      this.type = notification.type; // e-mail, SMS, etc.
      this.statut = notification.statut; // envoyé, en attente, etc.
    }
  
  }
  
  module.exports = Notification;