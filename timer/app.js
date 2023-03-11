const button = document.querySelector("#buttonTimer")
const outputHours = document.querySelector("#hours")
const outputMinutes = document.querySelector("#minutes")
const outputSeconds = document.querySelector("#seconds")

let isActive = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

const startTimerClickHandler = () => {
    timerId = setInterval(() => {
        outputHours.textContent = hours.toString().padStart(2, "0")
        outputMinutes.textContent = minutes.toString().padStart(2, "0")
        outputSeconds.textContent = seconds.toString().padStart(2, "0")
        
        seconds++

        if (seconds >= 60) {
            minutes++
            seconds = 0;
        }

        if (minutes >= 60) {
            hours++
            minutes = 0;
        }

        if (minutes >= 60) {
            hours++
            minutes = 0;
        }

    }, 1000)

}

const stopTimerClickHandler = () => {
    clearInterval(timerId)
}

button.addEventListener("click", () => {
    isActive = !isActive
    isActive ? startTimerClickHandler() : stopTimerClickHandler()
});