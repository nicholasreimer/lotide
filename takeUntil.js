/* ASSIGNMNET:
-create a func that will take in two parameters:
1- The array to work with
2- The callback (which Lodash calls "predicate")

-the fucntion outputs a new array made up of the elements from the arg array starting at index[0] and stopping when the value of the current
element return truthy when run through the call back funcs.
*/

//-------------------------------------------------------------------------------------------
//EQ ARRAYS AND ASSERT ARRAYS EQUALS ARE FUNCTION RELATED TO TESTING THE MAP FUNCTION:
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
//-------------------------------------------------------------------------------------------
/*
Function Explanation: TAKE UNTIL
-an array and a callback function are passed as args to the takeuntil func
-withing the func is a var named output that is set equal to a temporary value of an empty array (this will be the future func output)

-a for of loop cycles through the elements within the arg array, for each element the callback function is applied and if the result computes to:
TRUTHY: we return the current value of var output
FALSEY: we push the current loop element value (that computed falsey) to var output

-after the loop has finished return the value of var output as the funcs output
*/

// TAKEUNTIL FUNCTION
const takeUntil = function(array, callback) {
  let output = [];

  for (const elem of array) {

    if (callback(elem)) {
      return output;
    }
    output.push(elem);
  }
  return output;
};

//TAKE UNTIL FUNCTION TESTS
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
console.log(takeUntil(data1, x => x < 0));
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
console.log(takeUntil(data2, x => x === ','));
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);

const testArray1 = [1, 2, 3];
console.log(takeUntil(testArray1, x => x > 2));
assertArraysEqual(takeUntil(testArray1, x => x > 2), [1, 2]);
