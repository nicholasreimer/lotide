/* Instruction
-Implement a function eqArrays which takes in two arrays and returns true or false, based on a perfect match.

-It's okay for eqArrays to not return true for nested arrays or arrays of objects that are identical

STEPS:
-create function that takes two different arrays as its argument
-check to see if both arrays hav an equal number of elements: 
if TRUE: proceed to loop
if FALSE: function returns FASLE

-loop through each array and compare element[i] of ar1 against element[j] of ar2 

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


/*
TEST:
-Use assertEqual to write test cases for various scenarios.
-assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS




*/