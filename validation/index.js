// validation/index.js

const express = require('express');
const validationRoutes = require('./routes/validation.routes');

const router = express.Router();

router.use('/validations', validationRoutes);

module.exports = router;