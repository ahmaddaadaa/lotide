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




module.exports = middle;

