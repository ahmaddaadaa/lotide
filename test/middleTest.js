const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log("Test Assertion for the Middle function");
assertArraysEqual(middle([]), []); // calling the function
assertArraysEqual(middle([1]), []); // calling the function
assertArraysEqual(middle([1, 2]), []); // calling the function
assertArraysEqual(middle([1, 2, 3]), [2]); // calling the function
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // calling the function
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // calling the function

