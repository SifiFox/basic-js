const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(str.length === 0) return ''
  let strSplited = str.split('')
  let arr = []
  let count = 1

  while (strSplited.length > 0){

    if(strSplited[0] !== strSplited[1] || strSplited.length === 1){
      count > 1 ? arr.push(count + strSplited[0]) : arr.push(strSplited[0])
      count = 1
    }else{
      count++
    }
    strSplited.splice(0, 1)
  }
  return arr.join('')
}

module.exports = {
  encodeLine
};