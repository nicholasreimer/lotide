/* INSTRUCTIONS:
-function should take in a source array and a itemsToRemove array. 
-It should return a new array with only those elements from source that are not present in the itemsToRemove array.

-Use assertArraysEqual to write test cases for various scenarios.

-Among your test cases, be sure to include an important test that is easy to overlook: 
The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

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

const assertArraysEqual = function(arOne, arTwo) {
  if (eqArrays(arOne, arTwo)) {
    console.log("🟢 The Arrays are Equal");
  } else {
    console.log("🔴 The Arrays are NOT Equal");
  }
};

const without = function(source, toBeRemoved) {
  let output = []

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== toBeRemoved[i]) {
      output.push(source[i])
    }
  }
  return output;
};


//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);



/* TESTS FOR WITHOUT FUNCTION
INPUT:
1.) without([1, 2, 3], [1])
2.) without(["1", "2", "3"], [1, 2, "3"]) 

OUTPUT:
1.) [2, 3]
2.) ["1", "2"]
*/