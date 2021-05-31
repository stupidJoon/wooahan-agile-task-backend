const express = require('express');
const numberRouter = require('./number.js');

const router = express.Router();

router.use('/number', numberRouter);

router.get('/', function(req, res) {
  res.json('test');
});

module.exports = router;
