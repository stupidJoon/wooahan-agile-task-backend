module.exports = {
  number: 0,
  getNumber: function() {
    return this.number;
  },
  addNumber: function(operand) {
    this.number += operand;
  },
  modifyNumber: function(number) {
    this.number = number;
  },
  resetNumber: function() {
    this.number = 0;
  }
}
