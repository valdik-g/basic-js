const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    arr = arr.filter(element => Array.isArray(element));
    if (arr.length > 0) {
      arr = arr.flat();
      result += this.calculateDepth(arr);
    }
    return result;
  }
};