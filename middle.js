/* INSTRUCTIONS:
-The middle function should return an array with only the middle element(s) of the provided array. 
-This means that the length of the returned elements could vary.
-For arrays with one or two elements, there is no middle. Return an empty array.
-For arrays with odd number of elements, an array containing a single middle element should be returned.
-For arrays with an even number of elements, an array containing the two elements in the middle should be returned
-We can and should use the assertArraysEqual function for testing our new function. 

STEPS:
-create a function called middle that will take a single array arg
-create a placeholder var named output and make it equal to an empty array

-create a conditional that returns an empty string if the array has less then 3 elements
-using a conditional split up seperate processes for if array.length is EVEN or ODD

EVEN: (numbers divisible by 2)
-divide the array.length by two and use math.floor to round the number down, this is the index position of your middle element
-push the element value at index position  to var ouput

ODD: (numbers that are NOT divisible by 2)
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

const assertArraysEqual = function(arOne, arTwo) {

  if (eqArrays(arOne, arTwo)) {
    console.log("🟢 The Arrays are Equal");
  } else {
    console.log("🔴 The Arrays are NOT Equal");
  }
};
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));

// TEST FUNCS ^ABOVE^

const middle = function(array) {
  let output = [];

  if (array.length < 3) {                               //if array arg has less then three elements return an empty array
    return [];
  }

  if (array.length % 2 !== 0) {                        //is array.length odd? if yes push value
    const oddIndex = Math.floor(array.length / 2);
    output.push(array[oddIndex]);
  }

  if (array.length % 2 === 0) {
    const evenIndex = Math.floor(array.length / 2);
    output.push(array[evenIndex - 1]);
    output.push(array[evenIndex]);
  }
  return output;
};
console.log(middle([1, 2, 8, 4, 5, 6]));






