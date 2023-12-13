const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chains: [],
  getLength() {
    if(this.chains.length > 0){
        return this.chains.length
    }else{
      throw new NotImplementedError('Not implemented');
    }
  },
  addLink(value) {
    if(this.chains){
      this.chains.push( `( ${value} )` );
      return this;
    }
    else{
      throw new NotImplementedError('Not implemented');
    }
  },
  removeLink(position) {
    if( position < 1 || position > this.getLength() || typeof position != 'number'){
      this.chains = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chains.splice(position-1, 1)
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    let res = this.chains.join("~~")
    this.chains = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
