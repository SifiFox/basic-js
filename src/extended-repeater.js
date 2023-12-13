const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  let addition = "";
  let newStr = "";

  if(!options.repeatTimes){
    options.repeatTimes = 1
  }
  if(!options.separator){
    options.separator = "+"
  }
  if(options.addition === undefined){
    options.addition = ""
  }
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes = 1
  }
  if(!options.additionSeparator){
    options.additionSeparator = "|"
  }
  for(let i = 1; i < options.additionRepeatTimes; i++){
    addition += options.addition + options.additionSeparator
  }
  addition += options.addition
  for(let j = 1; j < options.repeatTimes; j++){
    newStr += str + addition + options.separator
  }
  newStr += str + addition;
  return newStr
}

module.exports = {
  repeater
};
