const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = "";
  const sortedArr = members.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    if (typeof sortedArr[i] === "string") {
      const word = sortedArr[i][0];
      res += word[0].toUpperCase();
    }
  }
  if (res === "") return false;
  return res;
}

module.exports = {
  createDreamTeam,
};
