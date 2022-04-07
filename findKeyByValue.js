/* INSTRUCTIONS:
-function called findKeyByValue takes an object and a value as its arguments
-it scans the object and returns the first key which contains the given value.
-if no key with that value is found it will return: undefined

STEPS:
-create func with two args, create placeholder var named output that will become func output
-loop through the values of the arg object 
-if argValue is directly equal to that loops object value then output is equal to that object values key


*/
//this function can compare two arrays and determine if they are equal

const findKeyByValue = function(object, argValue) {
  let output = ""

  for (const property in object) {

    if (object[property] === argValue) {
      output = argValue;

    } else {
      output = undefined;
    }
  }
  return output;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

/* EXAMPLE:

Argument Object:
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

INPUT: 
findKeyByValue(bestTVShowsByGenre, "The Wire")

OUTPUT: 
"drama"

*/