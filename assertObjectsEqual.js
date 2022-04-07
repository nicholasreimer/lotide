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

const assertObjectsEqual = function(objOne, objTwo) {
  const inspect = require('util').inspect;
  console.log(`objOne ${inspect(objOne)}`);            //prints the contents of the object to the terminal instead of just the object label
  console.log(`objTwo ${inspect(objTwo)}`);           //it accomplishes this by accessing the inspect method (js method)

  if (eqObjects(objOne, objTwo)) {
    console.log("🟢 The Objects are Equal");
  } else {
    console.log("🔴 The Objects are NOT Equal");
  }
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

console.log(assertObjectsEqual(cd, cd2))


