/* INSTRUCTIONS:
-The middle function should return an array with only the middle element(s) of the provided array. 
-This means that the length of the returned elements could vary.
-For arrays with one or two elements, there is no middle. Return an empty array.
-For arrays with odd number of elements, an array containing a single middle element should be returned.
-For arrays with an even number of elements, an array containing the two elements in the middle should be returned
-We can and should use the assertArraysEqual function for testing our new function. 
*/


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

module.exports = middle;






