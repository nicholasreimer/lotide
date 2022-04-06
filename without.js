/* INSTRUCTIONS:
-function should take in a source array and a itemsToRemove array. 
-It should return a new array with only those elements from source that are not present in the itemsToRemove array.

-Use assertArraysEqual to write test cases for various scenarios.

-Among your test cases, be sure to include an important test that is easy to overlook: 
The without function should be returning a new array and not modify the original array that is passed in. Let's write a test case to ensure this:

STEPS:
1.) create a function called without() that takes two arg arrays : 

2.) within the function use .filter() to filter through the source array arg

3.) create another function that will be used by filter: tThe func will compare the each element value of source to each element value of toBeRemoved

4.) each element within source that does NOT match with any of the elements within toBeRemoved is logged to a new array

5.) the output of the func is the result of the filtered array
*/


const without = function(source, toBeRemoved) {

  //filter throught the source array and remove and return only the value that is not present in toBeRemoved. 
  const result = source.filter(removeElems(toBeRemoved))


  function removeElems(array) {    //this function removes any elements 
    for (let i = 0; i < toBeRemoved.length; i++) {
      if (source[i] === elemsToRemove[i]) {

      }
    }
    return result
  }


/* TEST:
INPUT:
1.) without([1, 2, 3], [1])
2.) without(["1", "2", "3"], [1, 2, "3"]) 

OUTPUT:
1.) [2, 3]
2.) ["1", "2"]

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
*/