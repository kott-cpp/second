const fizzBuzz = require('./fizzBuzz');


// https://github.com/jest-community/jest-extended

//https://jestjs.io/docs/en/getting-started

//https://jestjs.io/docs/en/expect
describe('input', () => {
  it('fizzBuzz is a function', () => expect(fizzBuzz).toBeFunction())
  it('should return empty if passed a number besides 5 and 7', function() {
    const result = fizzBuzz(13)
    expect(result).toEqual('')
  })
  it('should return "fizz" if passed a 5', function() {
    const result = fizzBuzz(15)
    expect(result).toEqual('fizz')
  })

  it('should return "buzz" if passed a 7', function() {
    const result = fizzBuzz(17)
    expect(result).toEqual('buzz')
  })

  it('should return "fizzBuzz" if passed a 5 and 7', function() {
    const result = fizzBuzz(75)
    expect(result).toEqual('fizzBuzz')
  })

  it('should return an array with 12', function() {
    const result = fizzBuzz(12)
    expect(result).toEqual('12')
  })

})