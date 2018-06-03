'use strict';

const greet = require('../lib/greet.js'); 
describe ('greet module', () => {
  
  it ('should return null when passed non string', () => {

    expect(greet()).toBeNull();
  });

  it('should return "hello ryo" when passed ryo',()=>{
    let expected = 'hello ryo';

    let actual = greet ('ryo');

    expect(actual).toBe(expected);
  });
});
//The greet function should have a single parameter (arity of one) that should expect a string as it's input
