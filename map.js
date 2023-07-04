const assertArraysEqual = require(`./assertArraysEqual`);


const map = function(array, callback) {
  const newArray = [];

  for (let item of array) {

    newArray.push(callback(item));
  }

  return newArray;
};

const words = ["ground", "control", "to", "major", "tom"];

// get the first index of each element in Words string array 
const result = map(words, word => word[0]);


console.log(result);

assertArraysEqual(result, [ 'g', 'c', 't', 'm', 't' ]);

