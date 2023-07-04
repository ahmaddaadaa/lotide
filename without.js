const assertArraysEqual = require(`./assertArraysEqual`);

const without = function(source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element));

};
//
