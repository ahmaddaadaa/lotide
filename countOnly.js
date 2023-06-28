
const assertEqual = require(`./assertEqual`);


const countKey = function(key, arr) {
  let count = 0;
  for (let item of arr) {
    if (item === key) {
      count++;
    }
  }
  return count;
};

const countOnly = function(arr, obj) {
  let resultsObj = {};
  let count = 0;

  for (let key in obj) {
    if (obj[key] === true) {

      count = countKey(key, arr);
      if (count !== 0) {
        resultsObj[key] = count;
      }
    }
  }
  return resultsObj;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

