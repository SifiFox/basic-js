const { NotImplementedError } = require('../extensions/index.js');
const {repeater} = require("./extended-repeater");

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
  let repeated = []
  let arr1 = s1.split('')
  let arr2 = s2.split('')

  for (let i of arr1) {
      if(arr2.includes(i)){
        repeated.push(i);
        arr2.splice(arr2.indexOf(i), 1)
      }
  }
  return Number(repeated.length)
}

module.exports = {
  getCommonCharacterCount
};
