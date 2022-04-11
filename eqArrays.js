/* EQ ARRAYS:
-Implement a function eqArrays which takes in two arrays and returns true or false, 
based on a perfect match.
-It's okay for eqArrays to not return true for nested arrays or arrays of objects 
that are identical
*/

const assertEqual = require('./assertEqual');

let eqArrays = function(arOne, arTwo) {
  if (arOne.length !== arTwo.length) {
    return false;
  }

  for (let i = 0; i < arOne.length; i++) {
    if (arOne[i] !== arTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;
