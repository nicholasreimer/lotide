
const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {

  it('returns [2, 3] when given [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

});

// Test Case 1: Check the returned array elements

//const result = tail(["Hello", "Lighthouse", "Labs"]);

//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs"); // ensure second element is "Labs"
