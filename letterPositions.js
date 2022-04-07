/* INSTRUCTIONS:
-function called letterPositions will return all the indices(zero-based positions) in the string where each character is found.

INPUT: "sama"
OUTPUT: {s:0, a:1,3, m:2}

STEPS:
-create a function that will take a single string as its argument
-create a var named results that will become the function output and giv it an intial value of an empty object
-a for loop cycles thorugh each letter of the arg string

for each loop cycle:
IF: the value of string at the current loop index is NOT equal to " " (empty space) enter the next conditional: (this avoids having " " getting added to the output object)
IF: the value of string at the current loop index is already present inside of the output object, push the current index position value to that array
IF: the value of string at the current loop index is NOT present inside of the output object, create a new key inside of the output object and set its 
value to an array containg the current index position value

-return the value of the ouput object as the fucntions output



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
