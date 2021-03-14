const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(members === null)
    return false;
  let CodeName = [];
  let j = 0, t = 0;
  for(let i = 0;i<members.length;i++) {
    if (typeof members[i] === "string") {
      if(members[i][0] === ' ') {
        members[i] = members[i].replace(/\s/g, '');
      }
      CodeName[j] = members[i][0];
      j++;
    }
  }
  if(CodeName.length === 0)
    return false;
  return CodeName.join('').toUpperCase().split("").sort().join("");
};
