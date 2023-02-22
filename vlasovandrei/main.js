let button = document.getElementById('button');
let isActive = false;
let timerId;
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function switchActive() {
	if (isActive === false) {
		return isActive = true;
	} else {
		return isActive = false;
	}
}

function getTime() {
	if (switchActive()) {
		timerId = setInterval(() => {
			let now = new Date();
			seconds.textContent = now.getSeconds();
			minutes.textContent = now.getMinutes();
			hours.textContent = now.getHours();
		}, 1000);
	} else {
		clearInterval(timerId);
	}
}

button.addEventListener('click', getTime);

	