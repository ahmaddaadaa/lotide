// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log("\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: [" + actual + "] !== [" + expected + "]");
    return;
  }

  console.log("\u{2705}\u{2705}\u{2705} Assertion Passed: [" + actual + "] === [" + expected + "]");
  return;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
