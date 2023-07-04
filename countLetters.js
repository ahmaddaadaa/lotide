const assertEqual = require(`./assertEqual`);
//
const countLetters = function(str) {
  const newStr = str.toLowerCase();
  let letter = {};

  for (let i of newStr) {

    if (letter[i]) {
      letter[i] += 1;
    } else {
      letter[i] = 1;
    }

  }
  return letter;
};


const result = countLetters("Hello World");
console.log(result);

assertEqual(result['h'], 1);
assertEqual(result['l'], 3);










