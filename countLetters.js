
/* INSTRUCTIONS:
-create a function that takes a string and returns an object with a seperate key for each letter
and a value that corresponds to how many times that letter was in the string arg

INPUT: countLetters("LHL")
OUTPUT: L: 2, H: 1

STEPS:
-function named countLetters is created and take a single string as its single func arg
-within the func is an object that will serve as the future func output

-a new var named newString is made equal the value of arg string after the following methods are applied to it:
1.) toLowerCase() - sets all the letters within string to lower case
2.) .replace(/\s/g, '') - removes all spaces in the string
3.) .split() - seperates each letter within string so that we can loop through the letters one by one

-a forof loop cycles through each letter of newString and:
IF:   the letter (of the current loop) exsists already within the output object as a key => add 1 to its key value
ELSE: if this letter does NOT exsist within output as an object key, add it as a key and set its initial key value to 1

-return the value of output as the functions output
*/
const countLetters = function(string) {
  let output = {};

  let newString = string.toLowerCase().replace(/\s/g, '').split("");

  for (const letter of newString) {

    if (output[letter]) {
      output[letter] += 1;  //if this letter exsists inside output and 1 to its value
    } else {
      output[letter] = 1;   //if this letter does NOT exsist within output, add it and set its initial value to 1
    }
  }
  return output;
};

console.log(countLetters("abcD"));
