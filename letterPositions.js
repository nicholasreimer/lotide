/* INSTRUCTIONS:
-function called letterPositions will return all the indices(zero-based positions) in the string where each character is found.

INPUT: "sama"
OUTPUT: {s:0, a:1,3, m:2}
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

//console.log(letterPositions("bob says"));
