// notification/routes/notification.routes.js

const express = require('express');
const notificationController = require('../controllers/notification.controller');

const router = express.Router();

router.post('/envoyer', notificationController.envoyerNotification);

module.exports = router;