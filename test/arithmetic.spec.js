'use strict';

const arithmetic = require('../lib/arithmetic.js'); 
describe ('arithmetic module', () => {
  
  it ('should return null when passed non string', () => {

    expect(greet()).toBeNull();
  });

  it('should return "hello ryo" when passed ryo',()=>{
    let expected = 'hello ryo';

    let actual = greet ('ryo');

    expect(actual).toBe(expected);
  });
});
//]This module exports an object and should have add and sub methods that implement addition and subtraction.

// The add method should have a 2 parameters (airty of two)
// if either argument is a non-number the function should return null
// else return the sum of the 2 numbers
// The sub method should have 2 parameters (airty of two)
// if either argument is a non-number the function should return null
// else return the second parameter subtracted from the first parameter
