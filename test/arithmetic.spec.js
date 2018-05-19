'use strict';

const arithmetic = require('../lib/arithmetic.js'); 
describe ('arithmetic module', () => {
  
  it ('should return null when passed non number', () => {

    expect(arithmetic.add('test','result')).toBeNull();
  });

  it ('should return sum of 2 numbers when passed 2 numbers', () => {

    expect(arithmetic.add(1,2)).toEqual(3);
  });

  it ('should return null when passed non number', () => {

    expect(arithmetic.sub('test','result')).toBeNull();
  });

  it ('should return dif btw 2 numbers when passed 2 numbers', () => {

    expect(arithmetic.sub(2,1)).toEqual(1);
  });
});
//]This module exports an object and should have add and sub methods that implement addition and subtraction.

// The add method should have a 2 parameters (airty of two)
// if either argument is a non-number the function should return null
// else return the sum of the 2 numbers
// The sub method should have 2 parameters (airty of two)
// if either argument is a non-number the function should return null
// else return the second parameter subtracted from the first parameter
