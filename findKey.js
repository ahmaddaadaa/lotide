const assertEqual = require(`./assertEqual`);


const findKey = function(obj, callback) {

  for (let key in obj) {
    if (callback(obj[key])) return key;
  }

  return undefined;
};

const myObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

const keyFound = findKey(myObj, x => x.stars === 2); // => "noma"
///

console.log(keyFound);
assertEqual(keyFound, 'noma');

