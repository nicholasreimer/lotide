/* ASSIGNMNET:
-It will take in two parameters as well:
1- The array to work with
2- The callback (which Lodash calls "predicate")
-the fucntion outputs a sliced array of the elements from the arg array starting at index[0] and stopping when the value of the current
element meets the call back funcs condition returns true.

STEPS:
-

*/
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

//tells you wether two arrays are equal or not
const assertArraysEqual = function(arOne, arTwo) {

  if (eqArrays(arOne, arTwo)) {
    console.log("🟢 The Arrays are Equal");
  } else {
    console.log("🔴 The Arrays are NOT Equal");
  }
};

// TAKEUNTIL FUNCTION
const takeUntil = function(array, callback) {
  let output = [];

  for (const item of array) {

    if (callback(item)) {
      return output;
    }
    output.push(item);
  }
  return output;
};

//TAKE UNTIL TESTs
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//ASSERTARRAYS EQUAL TESTS:
const testArray1 = [1, 2, 3];
assertArraysEqual(takeUntil(testArray1, x => x > 2), [1, 2]);
