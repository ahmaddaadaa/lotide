const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
    return;
  }

  console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  return;
};

const tail = function(array) {
  let tailArr = array;
  tailArr.shift();
  return tailArr;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


module.exports = tail;


