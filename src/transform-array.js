const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!Array.isArray(arr)){
    throw new RangeError('Error');
  }
  let NewArr = [];
  let k =0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i] !== "--discard-prev" &&  arr[i] !== "--discard-next" &&  arr[i] !== "--double-next" &&  arr[i] !== "--double-prev") {
      NewArr[k] = arr[i];
      k++;
    }
    else {
      if (arr[i] === '--discard-next' && arr[i + 1] !== "undefind" && typeof arr[i + 1] !== "undefined") {
        i++;
      }
      if (arr[i] === '--discard-prev' && arr[i - 1] !== "undefind" &&  arr[i - 2] !== "--discard-next" && typeof arr[i - 1] !== "undefined") {
        NewArr.splice(k - 1,1);
        k--;
      }
      if (arr[i] === '--double-next' && arr[i + 1] !== "undefind" && typeof arr[i + 1] !== "undefined") {
        NewArr[k] = arr[i+1];
        k++;
      }
      if (arr[i] === '--double-prev' && arr[i - 1] !== "undefind" &&  arr[i - 2] !== "--discard-next" && typeof arr[i - 1] !== "undefined") {
        NewArr[k] = arr[i-1];
        k++;
      }
    }
  }
  return NewArr;
};
