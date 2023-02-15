function printNumbers(from, to) {
  let currentNumber = from

  let timeInterval = setInterval(function() {
    console.log(currentNumber)
    if (currentNumber == to) {
      clearTimeout(timeInterval)
    }
    currentNumber++
  }, 1000)
}

printNumbers(1, 5)
