const tail = function(array) {
  let tailArr = array;
  tailArr.shift();
  return tailArr;
};


module.exports = tail;


