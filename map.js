/* ASSIGNMENT:
Our map function will take in two arguments:
1- An array to map
2- A callback function

-The map function will return a new array based on the results of the callback function.



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

// Map Function:
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST 1:
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
//anon func: seperates the first letter of each word
console.log(results1);
console.log(assertArraysEqual(words, results1));

//TEST 2:
const numbers = ['1', '4', '7', '10'];
const results2 = map(numbers, num => num * 2);
//anon func: multiplies each array element by 2
console.log(results2);
console.log(assertArraysEqual(numbers, results2));

//TEST 3:
const people = ['bob', 'charlie', 'franklin', 'homeskillet'];
const results3 = map(people, people => people.length);
//anon func: prints the .length value of each element
console.log(results3);
console.log(assertArraysEqual(people, results3));


//test cases to try from Charles
const testArray1 = ['bacon', 'gravy', 'soda'];
const testArray2 = [1, 2, 3]
const testArray3 = [3, 2, 1]
assertArraysEqual(map(testArray1, word => word[0]), ['b', 'g', 's']);
assertArraysEqual(map(testArray2, num => num * 2), [2, 4, 6]);
assertArraysEqual(map(testArray3, num => num > 2), [true, false, false]); 