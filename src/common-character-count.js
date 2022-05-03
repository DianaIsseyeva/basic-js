const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const words = [];
  words.push(s1, s2);
  let res = words[0].split("");
  // console.log(res);
  let temp = [];

  //начиная со второго слова в массиве
  for (let i = 1, size = words.length; i < size; i++) {
    for (let j = 0, sizeJ = words[i].length; j < sizeJ; j++) {
      //перебираем все буквы каждого слова
      const letter = words[i][j];
      //ищем индекс буквы в результате
      const tempIndex = res.indexOf(letter);
      // если буква найдена то пушим в temp
      if (tempIndex > -1) {
        temp.push(letter);
        res.splice(tempIndex, 1);
      }
    }
    res = temp;
    // console.log(temp)
    temp = [];
  }
  return res.length;
}

module.exports = {
  getCommonCharacterCount,
};
