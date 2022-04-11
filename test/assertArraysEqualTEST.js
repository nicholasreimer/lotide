
const assertArraysEqual = require('../assertArraysEqual.js');

//TEST:
assertArraysEqual([1, 2, 3,], [1, 2, 3]);  //true
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);  //false - (diferent .lengths)

module.exports = assertArraysEqual;