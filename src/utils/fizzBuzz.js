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

function allFizzBuzz(num1, num2) {
  let arr = []

  const [first, last] = [num1, num2].sort();

  let num

  for (num = first; num <= last; num++)
  {
    arr.push(num + ':'+ fizzBuzz(num))
  }
  return arr
}

module.exports = { fizzBuzz, allFizzBuzz }
