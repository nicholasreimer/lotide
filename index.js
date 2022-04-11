// index.js
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');

const map = require('./map');
const countOnly = require('./countOnly');
const without = require('./without');
const takeUntil = require('./takeUntil');

const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');

const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');

const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head,
  tail,
  middle,

  map,
  countOnly,
  without,
  takeUntil,

  countLetters,
  letterPositions,

  findKey,
  findKeyByValue,

  eqArrays,
  eqObjects,

  assertEqual,
  assertArraysEqual,
  assertObjectsEqual
};