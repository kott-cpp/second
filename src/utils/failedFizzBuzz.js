function failedFizzBuzz(num) {
  const input = JSON.stringify(num)
  const fbNumbers = ['5', '7']
  let resultArray = []

  for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    for (let fbNumber = 0; fbNumber < fbNumbers.length; fbNumber++) {
      if (input[inputIndex] === fbNumbers[fbNumber]) {
        if (input[inputIndex] === '5') {
          resultArray.push('fizz')
        } else if (input[inputIndex] === '7') {
          resultArray.push('buzz')
        }
      }
    }
  }
  console.log(resultArray.join(''))
}

failedFizzBuzz(57)
module.exports = {failedFizzBuzz, inputIndex}
