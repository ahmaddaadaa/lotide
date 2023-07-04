const assertArraysEqual = require(`./assertArraysEqual`);




const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      return results;
    }
    results.push(item);
  }

};

//

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']);
