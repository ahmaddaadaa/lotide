
const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log("\u{1F6D1}\u{1F6D1}\u{1F6D1} Assertion Failed: [" + actual + "] !== [" + expected + "]");
    return;
  }

  console.log("\u{2705}\u{2705}\u{2705} Assertion Passed: [" + actual + "] === [" + expected + "]");
  return;
};

const tail = function(array) {
  return array[array.length - 1];
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"