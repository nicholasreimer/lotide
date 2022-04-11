
/* INSTRUCTIONS:
-create a function that takes a string and returns an object with a seperate key for each letter
and a value that corresponds to how many times that letter was in the string arg

INPUT: countLetters("LHL")
OUTPUT: L: 2, H: 1

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

//console.log(countLetters("abcD"));
