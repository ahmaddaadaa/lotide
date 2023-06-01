
const countOnly = function(arr, obj) {
  let resultsObj = {};
  let count = 0;

  for (let key in obj) {
    if (obj[key] === true) {

      count = countKey(key, arr);
      if (count !== 0) {
        resultsObj[key] = count;
      }
    }
  }
  return resultsObj;
};






const countKey = function(key, arr) {
  let count = 0;
  for (let item of arr) {
    if (item === key) {
      count++;
    }
  }
  return count;
};



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


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log("-------------------");
console.log(result1);
console.log("-------------------");


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(countKey(5, [1, 5, 6, 7, 5, 9, 5]));

