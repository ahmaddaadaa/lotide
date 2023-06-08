const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');


const assertArraysEqual = function(array1, array2) {

  assertEqual(eqArrays(array1, array2), true);

};

module.exports = assertArraysEqual;


