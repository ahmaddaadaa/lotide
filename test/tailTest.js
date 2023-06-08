const assert = require('chai').assert;

//const assertEqual = require('../assertEqual');
const tail = require('../tail');

describe('tail', function() {
  it('should return the last element of the array', function() {
    const arr = ["Hello", "Lighthouse", "Labs"];
    const result = tail(arr);
    assert.strictEqual(result, 'Labs');
  });
});

// const assertEqual = require('../assertEqual');
// const tail = require('../tail')




// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, 'Labs'); // ensure we get back two elements
