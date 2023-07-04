const assert = require('chai').assert;
const middle = require('../middle');

describe('middle', function() {
  it('should return an empty array when the input array is empty', function() {
    assert.deepEqual(middle([]), []);
  });

  it('should return an empty array when the input array has only one element', function() {
    assert.deepEqual(middle([1]), []);
  });

  it('should return an empty array when the input array has only two elements', function() {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('should return the middle element when the input array has an odd length', function() {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('should return the middle two elements when the input array has an even length', function() {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('should return the middle element when the input array has an odd length', function() {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});