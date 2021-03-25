const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let mas = "";
    let last = false;
    if (typeof options.repeatTimes === "undefined")
        options.repeatTimes = 1;
    if (typeof options.addition === "undefined")
        options.addition = "";
    if (typeof options.additionRepeatTimes === "undefined")
        options.additionRepeatTimes = 1;
    if (typeof options.separator === "undefined")
        options.separator = "+";
    if (typeof options.additionSeparator === "undefined")
        options.additionSeparator = "|";
    for (let i = 0; i < options.repeatTimes; i++) {
        mas+=str;
        if(options.additionRepeatTimes == 1) {
            mas+=String(options.addition);
        }
        else{
            mas+=String(options.addition);
            mas+=String(options.additionSeparator);
        }
        for(let j = 1;j< options.additionRepeatTimes;j++) {
            if(j === options.additionRepeatTimes - 1) {
                mas += String(options.addition);
                last = false;
            }
            else{
                mas += String(options.addition);
                mas += String(options.additionSeparator);
                last = true;
            }
        }
        if(last){
            mas+=String(options.addition);
        }
        if(i !== options.repeatTimes - 1)
            mas+= String(options.separator);
    }
    return mas;
};
  