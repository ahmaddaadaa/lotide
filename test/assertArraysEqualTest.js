const assert = require('chai').assert;

describe('Array Comparison', function() {
  it('should assert that two arrays are equal', function() {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });
});

