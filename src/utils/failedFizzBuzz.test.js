const {failedFizzBuzz, inputIndex} = require('./failedFizzBuzz');


// https://github.com/jest-community/jest-extended

//https://jestjs.io/docs/en/getting-started

//https://jestjs.io/docs/en/expect

it('fizzBuzz is a function', () => expect(failedFizzBuzz).toBeFunction())
it('inputIndex = 0', () => expect(inputIndex).toBeNumber())
