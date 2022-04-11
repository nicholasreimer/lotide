const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');

const assert = require('chai').assert;

describe("#middle", () => {

  it("returns [8, 4] for [1, 2, 8, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 8, 4, 5, 6]), [8, 4]);
  });

  it("returns [4] for [1, 2, 8, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 8, 4, 5, 6, 7]), [4]);
  });

});
