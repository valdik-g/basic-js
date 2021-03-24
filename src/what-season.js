const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === 0 || date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error();
  }
  let k = date.getMonth();
  if (date.getDate() === 0) {
    k--;
  }
  if (k == 11 || k == 0 || k == 1) {
    return "winter"
  }
  if (k == 2 || k == 3 || k == 4) {
    return "spring"
  }
  if (k == 5 || k == 6 || k == 7) {
    return "summer"
  }
  if (k == 8 || k == 9 || k == 10) {
    return "autumn"
  }
};
