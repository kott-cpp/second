let arr = []
function fizzBuzz(num) {
  for (let i = num; i <= num; i++) {
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
  arr.push(num)
  console.log(arr)
}

module.exports = fizzBuzz
