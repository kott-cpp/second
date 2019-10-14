let arr = []
function fizzBuzz(num) {

  if ((num + '').includes('7') && (num + '').includes('5')) {
    return 'fizzBuzz'
  } else if ((num + '').includes('5')) {
    return 'fizz'
  } else if ((num + '').includes('7')) {
    return 'buzz'
  } else {
    return ''
  }
}

module.exports = fizzBuzz
