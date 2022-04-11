/* ASSIGNMENT:
-Implement the function findKey which takes in an object and a callback. 
-It should scan the object and return the first key for which the callback returns a truthy value. 
-If no key is found, then it should return undefined.
-Feel free to take a look at our solution for findKeyByValue. Some of the core logic will be the same (such as the looping over object keys part).
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
STEPS:
-an object and a callback func get passed to findKey func as args
-inside the func is a var named output with an initial value of undefined:
NOTE: by setting this to undefined at the start, it will return undefined if the func doesnt find a truthy value after being run through the callback)

-a for in loop cycles through each property within the object:
-if the current loop property outputs truthy when run through the call back func:
IF TRUTHY: change the value of output to the current property being looped, once this happens a break stops the loop from going again.
NOTE: the break allows us to return the FIRST property to return truthy, without the break we would keep looping and not meet the assignments requirements

-now that we have broken out of the loop (due to a truthy output from the callback) the function output is the current value of var output
*/

// FINDKEY FUNCTION
const findKey = function(object, callback) {
  let output = undefined;

  for (const property in object) {

    if (callback(object[property])) {
      output = property;
      break;
    }
  }
  return output;
};

/*
//TEST CASES FOR findKey FUNCTION:

TEST 1: 
//FUNC ARGS: 
1.)object with 6 properties each containing a property as its key.value
2.) anon func that checks if the value within the stars key is directly equal to 2


//this console.log simply returns the output that the next function is testing:
console.log(findKey(
  {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  },
  x => x.stars === 2))

assertArraysEqual(findKey(
  {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  },
  x => x.stars === 2), "noma");

*/
