function printNumbers(from, to) {
  let currentNumber = from

  setTimeout(function timer() {
    console.log(currentNumber)
    if (currentNumber < to) {
      setTimeout(timer, 1000)
    }
    currentNumber++
  }, 1000)
}

printNumbers(1, 5)
