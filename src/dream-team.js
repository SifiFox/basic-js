const { NotImplementedError } = require('../extensions/index.js');
const {isString} = require("mocha/lib/utils");

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
  if (!members || !Array.isArray(members)) return false;
  let team = ''
  members = members.sort();
  for(let i = 0; i < members.length; i++){
    if(typeof (members[i]) == 'string') {
      team += members[i].trimStart().slice(0,1)
    }
  }
  team = team.toUpperCase().split('').sort().join('');
  return team
}

module.exports = {
  createDreamTeam
};
