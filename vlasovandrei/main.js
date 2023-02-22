let button = document.getElementById('button');
let elHours = document.getElementById('hours');
let elMinutes = document.getElementById('minutes');
let elSeconds = document.getElementById('seconds');

let isActive = false;
let timerId;

let seconds = 50;
let minutes = 0;
let hours = 0;

function switchActive() {
	if (isActive === false) {
		return isActive = true;
	} else {
		return isActive = false;
	}
}

function startStopTimer() {
	if (switchActive()) {
		timerId = setInterval(() => {
			seconds++;
			if (seconds === 60) {
				seconds = 0;
				minutes++;
			} if (minutes === 60) {
				hours++;
				minutes = 0;
			}
			elSeconds.textContent = seconds;
			elMinutes.textContent = minutes;
			elHours.textContent = hours;
		}, 1000);
	} else {
		clearInterval(timerId);
	}
}

button.addEventListener('click', startStopTimer);

	