const assertArraysEqual = require(`./assertArraysEqual`);

const middle = function(array) {
  let container = [];

  if (array.length <= 2) {
    return container;
  } else if (array.length % 2 === 0) {
    container.push(array[(array.length / 2) - 1]);
    container.push(array[array.length / 2]);
    return container;
  } else {
    container.push(array[Math.floor(array.length / 2)]);
    return container;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


module.exports = middle;

