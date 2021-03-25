const CustomError = require("../extensions/custom-error");
let REV = true;
class VigenereCipheringMachine {
  constructor(Rev){
    if(typeof Rev !== "undefined")
      this.REV = Rev;
    else
      this.REV = true;
  }
  encrypt(message, key ) {
    let t = 0; let k = 0;
    let str ="";
    if (typeof message === "undefined" || typeof key === "undefined")
      throw new Error();
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      if(message[i] <= 'Z' && message[i] >= 'A'){
        t=key[j % key.length].charCodeAt(0) - 65;
        j++;
        k=message[i].charCodeAt(0) - 65;
        str += String.fromCharCode((k + t) % 26 + 65);
      }
      else
      {
        str+=message[i];
      }
    }
    if(this.REV === true)
      return str;
    else
      return str.split('').reverse().join("")
  }
  decrypt(encryptedMessage, key) {
    let t = 0; let k = 0;
    let str ="";
    if(typeof  encryptedMessage === "undefined" || typeof  key === "undefined")
      throw new Error();
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if(encryptedMessage[i] <= 'Z' && encryptedMessage[i] >= 'A'){
        t=key[j % key.length].charCodeAt(0) - 65;
        j++;
        k=encryptedMessage[i].charCodeAt(0) - 65;
        str += String.fromCharCode((k + 26 - t) % 26 + 65);
      }
    else
      {
        str+=encryptedMessage[i];
      }
    }
    if(this.REV === true)
      return str;
    else
      return str.split('').reverse().join("")
  }
}


module.exports = VigenereCipheringMachine;
