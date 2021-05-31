const express = require('express');

const router = express.Router();
const number = require('../models/number.js');

router.get('/', (req, res) => {
  res.json(number.getNumber());
});

router.post('/', (req, res) => {
  number.addNumber(req.body['number']);
  res.status(200).end();
});

router.put('/', (req, res) => {
  number.modifyNumber(req.body['number']);
  res.status(200).end();
});

router.delete('/', (req, res) => {
  number.resetNumber();
  res.status(200).end();
});

module.exports = router;
