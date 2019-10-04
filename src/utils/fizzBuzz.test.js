const fizzBuzz = require('./fizzBuzz');
const input = require('./fizzBuzz')

// https://github.com/jest-community/jest-extended

//https://jestjs.io/docs/en/getting-started

//https://jestjs.io/docs/en/expect

it('fizzBuzz is a function', () => expect(fizzBuzz).toBeFunction)

it('input is not a string', () => expect(input).toBeNumber())