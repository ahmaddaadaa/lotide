// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  console.log(`\u{2705}\u{2705}\u{2705} Assertion Passed: [${actual}] === [${expected}]`);
  return;
};



const findKey = function(obj, callback) {
  const results = {};

  for (let item in obj) {
    if(callback(obj[item])) return item;
  }

  return undefined;
};

const value = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"


console.log(value);
assertEqual(value, 'noma');

