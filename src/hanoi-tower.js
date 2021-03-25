const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn = Math.pow(2,disksNumber) - 1;
    let second = Math.floor(turn*3600/turnsSpeed);
    let t ={
    turns: turn, seconds: second
  };
  return t;
};
