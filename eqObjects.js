/* ASSIGNMENT:
-create function eqObjects which will take in two objects and returns true or false, based on a perfect match.
-first conditional asks if both objects hav an equal number of keys
-for loop cycles through each key in each object
-first loop conditional asks if elements in each object are an array, if yes input those elements into pre-exsisting eqArrays function to confirm they are both equal
-if they dont fit the above, assume they are pimitive values and pass them on to the next conditional
 

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

const eqObjects = function(objOne, objTwo) {

  if (Object.keys(objOne).length === Object.keys(objTwo).length) {

    for (let elem in objOne) {

      if (Array.isArray(objOne[elem]) || Array.isArray(objTwo[elem])) {
        if (eqArrays(objOne[elem], objTwo[elem]) === true) {
          return true;
        }
      }
      if (objOne[elem] !== objTwo[elem]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

//TESTS
//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

//const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

