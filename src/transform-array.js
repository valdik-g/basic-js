const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(typeof arr === "null" || typeof arr === "undefined"){
    throw Error;
  }
  let NewArr = [];
  let length = 0;
  let t = 0;
  NewArr = arr;
  for(let i = 0;i<arr.length;i++){
    if(typeof arr[i]==="string") {
      if (arr[i] === "--discard-next" && typeof arr[i + 1] !== "undefined") {
        NewArr.splice(i,2);
      }
      if (arr[i] === "--discard-prev" && typeof arr[i - 1] !== "undefined") {
        NewArr.splice(i - 1,2);
      }
      if (arr[i] === "--double-next" && typeof arr[i + 1] !== "undefined") {
        NewArr.splice(i,1, arr[i+1]);
      }
      if (arr[i] === "--double-prev" && typeof arr[i - 1] !== "undefined") {
        NewArr.splice(i-1,0,arr[i-1])
      }
    }
  }
  return NewArr;
};
