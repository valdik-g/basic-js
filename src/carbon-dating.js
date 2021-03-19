const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || sampleActivity === undefined)
    return false;
  if(Number(sampleActivity)>15 || Number(sampleActivity)<=0 || isNaN(sampleActivity))
    return false;
  let k = 0.693/HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY/Number(sampleActivity))/k;
  t = Math.ceil(t);
  return t;
};
