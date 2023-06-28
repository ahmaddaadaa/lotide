const assertArrysEqual = require(`./assertArraysEqual`);
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();
    
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    
  }
  return results;
};

const results = letterPositions("Hello World");

console.log(results);
assertArrysEqual(results['h'],[0]);
assertArrysEqual(results['l'],[2,3,9]);