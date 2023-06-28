const assertEqual = require(`./assertEqual`);


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};


const findKeyByValue = function(obj, value) {
  for (let key in obj) {

    if (obj[key] === value) {

      return key;
    }
  }


  return undefined;
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);