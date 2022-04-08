/* ASSIGNMENT:
Our map function will take in two arguments:
1- An array to map
2- A callback function
-and will return a new array based on the results of the callback function.
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
Function Explanation: Map Function
-an array and a callback function are passed as args to the function map
-withing the func is a var named results that is set equal to a temporary value of an empty array (this will be the future func output)
-a for of loop cycles through the elements within the arg array, for each element the callback function is applied and if the result computes to truthy:
then we push that element value to the results array
-once the loop has finished the func returns the value of var results as its func output
*/

// Map Function:
const map = function(array, callback) {
  const results = [];

  for (let elem of array) {
    results.push(callback(elem));
  }
  return results;
};

//TEST CASES FOR map FUNCTION:

//TEST 1: anon func: seperates the first letter of each word
const words = ["ground", "control", "to", "major", "tom"];
console.log(map(words, word => word[0]));
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);

//TEST 2: anon func: multiplies each array element by 2
const numbers = ['1', '4', '7', '10'];
console.log(map(numbers, num => num * 2));
assertArraysEqual(map(numbers, num => num * 2), [2, 8, 14, 20]);

//TEST 3: anon func: prints the .length value of each element
const people = ['bob', 'charlie', 'franklin', 'homeskillet'];
console.log(map(people, people => people.length));
assertArraysEqual(map(people, people => people.length), [3, 7, 8, 11]);

