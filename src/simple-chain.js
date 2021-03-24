const CustomError = require("../extensions/custom-error");
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(isNaN(+position) || position == "" || this.arr[position] === undefined){
      this.arr =[];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let Str = "";
    this.arr.map((element, i)=>{
      if(i == 0){
        Str +=`( ${element} )`
      }
      else
        Str +=`~~( ${element} )`
    })
    this.arr = [];
    return Str;
  }
};

module.exports = chainMaker;
