const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let CodeName = [];
  let j = 0;
  for(let i = 0;i<members.length;i++) {
    if (typeof members[i] === "string") {
      CodeName[j] = members[i][0];
      j++;
    }
  }
  if(CodeName.length === 0)
    return false;
  return CodeName.sort().join('');
};
