/* INSTRUCTIONS:
-function called letterPositions will return all the indices(zero-based positions) in the string where each character is found.

INPUT: "sama"
OUTPUT: {s:0, a:1,3, m:2}

STEPS:
-create a function that will take a single string as its argument
-create a var named results that will become the function output and giv it an intial value of an empty object
-a new var named newString is made equal the value of arg string after the following methods are applied to it:
1.) toLowerCase() - sets all the letters within string to lower case
2.) .replace(/\s/g, '') - removes all spaces in the string
3.) .split() - seperates each letter within string so that we can loop through the letters one by one

-now we cant take newVar which is an array of individual letter elements and loop through each element with a for loop

Within the Loop:
-if this index value exsists inside output already add the current index value to output as well
-if this letter does NOT exsist within output, add it and set its initial value to 1


-
*/
const letterPositions = function(string) {
  let output = {};

  for (let i = 0; i < string.length; i++) {

    if (string[i] !== ' ') {
      if (output[string[i]]) {
        output[string[i]].push(i);  //if this index value exsists inside output already and the current index value to output as well
      } else {
        output[string[i]] = [i];   //if this letter does NOT exsist within output, add it and set its initial value to 1
      }
    }
  }
  return output;
};
console.log(letterPositions("bob says"));
