// notification/index.js

const express = require('express');
const notificationRoutes = require('./routes/notification.routes');

const router = express.Router();

router.use('/notifications', notificationRoutes);

module.exports = router;