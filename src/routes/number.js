const express = require('express');
const number = require('../models/number.js');

const router = express.Router();

router.get('/', async (req, res) => {
  res.json(await number.getNumber());
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
