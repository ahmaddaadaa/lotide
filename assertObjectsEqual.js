const eqObjects = require(`./eqObjects`);
const inspect = require('util').inspect;
//
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)} `);
  }

  return console.log(`🛑🛑🛑 Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)} `);
};

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '5', b: 2 });
