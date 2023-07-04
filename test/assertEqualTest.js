const assert = require('chai').assert;


describe('assertEqual', function() {
  it('returns true if the two strings are not equal', function() {
    assert.notStrictEqual("Lighthouse Labs", "Bootcamp");
  });

  it('should assert that two numbers are equal', function() {
    assert.strictEqual(1, 1);
  });
});