// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  console.log(`\u{2705}\u{2705}\u{2705} Assertion Passed: [${actual}] === [${expected}]`);
  return;
};



const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
};

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

const assertArraysEqual = function(array1, array2) {

  assertEqual(eqArrays(array1, array2), true);

};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // calling the function

const without = function(source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element));

};