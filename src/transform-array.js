const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(typeof arr === "null" || typeof arr === "undefined"){
    throw new RangeError('Error');
  }
  let NewArr = [];
  NewArr = arr;
  for(let i = 0;i<NewArr.length;i++){
    if(typeof arr[i]==="string") {
      if (arr[i] === '--discard-next' && typeof arr[i + 1] !== "undefined") {
        NewArr.splice(i,2);
      }
      if (arr[i] === '--discard-prev' && typeof arr[i - 1] !== "undefined") {
        NewArr.splice(i - 1,2);
      }
      if (arr[i] === '--double-next' && typeof arr[i + 1] !== "undefined") {
        NewArr.splice(i,1, arr[i+1]);
      }
      if (arr[i] === '--double-prev' && typeof arr[i - 1] !== "undefined") {
        NewArr.splice(i,1,arr[i-1])
      }
      else
        NewArr.splice(i,1);
    }
  }
  return NewArr;
};
