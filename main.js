const timerButton = document.getElementById("timer")

let timerStarted = false
let secondCounter = 0
let timerId

function timerStarStop() {
  if (!timerStarted) {
    printSeconds()
  } else {
    stopPrintSeconds()
  }
}

function printSeconds() {
  timerId = setInterval(() => {
    console.log(secondCounter)
    secondCounter++
  }, 1000)

  timerStarted = true
}

function stopPrintSeconds() {
  clearInterval(timerId)
  timerStarted = false
  console.log("Paused")
}

timerButton.addEventListener("click", timerStarStop)
