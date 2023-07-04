const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

describe('assertEqual with eqArrays', function() {
  it('should assert that two arrays are equal', function() {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});

