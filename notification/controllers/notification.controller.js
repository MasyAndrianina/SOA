// notification/controllers/notification.controller.js

const Notification = require('../models/notification.model');

exports.envoyerNotification = async (req, res) => {
  try {
    const notification = new Notification(req.body);
    notification.statut = 'envoyé';

    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

