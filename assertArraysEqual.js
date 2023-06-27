const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {

  // assertEqual(eqArrays(array1, array2), true);
  if(eqArrays(array1, array2)){
    return console.log(`✅✅✅ array1: [${array1}] is equal to array2: [${array2}]`);
  }
  console.log(`🛑🛑🛑 array1: [${array1}] is NOT equal to array2: [${array2}]`);
};



module.exports = assertArraysEqual;


