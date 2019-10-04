
const input = 27;

function fizzBuzz(num) {

  if (num == 5) {
    console.log('fizz')
  } else if (num == 7) {
    console.log('buzz')
  } else {
    console.log('fizzbuzz')
  }
  return num
}
fizzBuzz(4)
module.exports = fizzBuzz
