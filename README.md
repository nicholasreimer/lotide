# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

head: 
-prints all but the last element in a given input array

tail: 
-prints all but the first element of a given input array

middle: 
-determines the length of a given array and returns the single middle element if length is odd and the two middle elements if length is even.

map: 
-will return a new array based based of and based on a given array input and callback func input

countOnly: 
-takes in a collection of items and a callbackfunc as inputs and returns counts for a specific subset of those items based on the callback func. 

without: 
-takes two seperate arrays (source, itemsToRemove) and returns a new array with only those elements from the source array that are not present in the itemsToRemove array.

takeUntil: 
-the fucntion outputs a new array made up of the elements from the arg array starting at index[0] and stopping when the value of the current element returns truthy when run through the call back funcs.

countLetters: 
-takes a string and returns an object with a seperate key for each letter and a value that corresponds to how many times that letter was in the string input arg.

letterPositions: 
-will return all the indices(zero-based positions) in the arg input string where each character is found.

findKey: 
-takes in an object and a call back func, its scans the object and returns the first key for which the callback func returns a truthy value. 

findKeyByValue: 
-takes an object and a value as its arguments, it scans the object and returns the first key which contains the given value.

eqArrays: 
-takes in two arrays and returns true or false, 
based on a perfect match.
NOTE: eqArrays does NOT return true for nested arrays or arrays of objects that are identical

eqObjects: 
-take in two objects and returns true or false, based on a perfect match.

assertEqual:
-returns a console.log satement if actual input is directly equal to expected input or if it is not.
NOTE: does not work with array inputs, use assertArraysEqual instead
NOTE: does not work with object inputs, use assertObjectEqual instead

assertArraysEqual:
-take in two arrays and console.log an appropriate message to the console built of the code of assertEqual

assertObjectsEqual: 
-take in two arrays and console.log an appropriate message to the console built of the code of assertEqual
