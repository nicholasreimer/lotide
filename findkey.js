/* ASSIGNMENT:
-Implement the function findKey which takes in an object and a callback. 
-It should scan the object and return the first key for which the callback returns a truthy value. 
-If no key is found, then it should return undefined.
-Feel free to take a look at our solution for findKeyByValue. Some of the core logic will be the same (such as the looping over object keys part).

STEPS:
-an object and a callback func get passed to findKey func as args
-inside the func is a var named output with a temp value of an empty string
-a for in loop cycles through each property within the object arg
-if the current loop property outputs true when run through the call back func:
return that property value as the funcs output
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

//tell you wether two arrays are equal or not
const assertArraysEqual = function(arOne, arTwo) {

  if (eqArrays(arOne, arTwo)) {
    console.log("🟢 The Arrays are Equal");
  } else {
    console.log("🔴 The Arrays are NOT Equal");
  }
};

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


