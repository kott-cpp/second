const {fizzBuzz, allFizzBuzz}  = require('./fizzBuzz');


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
})

describe('allFizzBuzz using fizzBuzz', () => {
  it('should be a function', () => expect(allFizzBuzz).toBeFunction())

  it('should be an array', () => {
    const result = allFizzBuzz()
    expect(result).toBeArray()
  });

  it('should have 12 in the array', () => {
    const result = allFizzBuzz(12, 13)
    expect(result).toEqual(expect.arrayContaining(['12:', '13:']))
  });

  it('should have 3 objects in the array', () => {
    const result = allFizzBuzz(12,14)
    expect(result).toHaveLength(3)
  });

  it('should have 12, 13, 14 in the array', () => {
    const result = allFizzBuzz(12, 14)
    expect(result).toEqual(expect.arrayContaining(['12:', '13:', '14:']))
  });

  it('should have 12, 13, 14 in the array', () => {
    const result = allFizzBuzz(14, 12)
    expect(result).toEqual(expect.arrayContaining(['12:', '13:', '14:']))
  });


  it('should have 12:, 15:fizz, 17:buzz, 57:fizzBuzz in the array', () => {
    const result = allFizzBuzz(1, 100)
    console.log(result)
    expect(result).toEqual(expect.arrayContaining(['12:', '15:fizz', '17:buzz', '57:fizzBuzz']))
  });
});