/* INSTRUCTIONS:
-create a new fucntion called assertArraysEqual which will take in two arrays and console.log an appropriate message to the console built of the code of assertEqual
-Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.
*/

//this function can compare two arrays and determine if they are equal
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

//this function uses the eqArrays function (from above) to return a console.log that will
//tell you wether two arrays are equal or not
const assertArraysEqual = function(arOne, arTwo) {

  if (eqArrays(arOne, arTwo)) {
    console.log("🟢 The Arrays are Equal");
  } else {
    console.log("🔴 The Arrays are NOT Equal");
  }
};
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));