const express = require('express');
const numberRouter = require('./number.js');

const router = express.Router();

router.use('/number', numberRouter);

module.exports = router;
