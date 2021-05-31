const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', function(req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../views') });
});

module.exports = router;
