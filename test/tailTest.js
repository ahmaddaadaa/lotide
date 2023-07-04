const assert = require('chai').assert;

const tail = require('../tail');

describe('tail', function() {
  it('should return the tail element of the array', function() {
    const arr = ["Hello", "Lighthouse", "Labs"];
    const result = tail(arr);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
});

