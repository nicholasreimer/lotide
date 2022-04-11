
//TAIL:
// -the "tail" of an array, every element except the head (first element) of the array
// is returned as a String.

const tail = function(array) {
  const outputArray = array.slice(1, array.length);
  return outputArray;
};


module.exports = tail;