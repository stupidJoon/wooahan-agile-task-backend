const db = require('./db.js');

module.exports = {
  getNumber: async function() {
    const number = await db.selectNumber();
    return number;
  },
  addNumber: async function(operand) {
    await db.addNumber(operand);
  },
  modifyNumber: async function(number) {
    await db.updateNumber(number);
  },
  resetNumber: async function() {
    await db.updateNumber(0);
  }
}
