document.body.style.background = '#A9A9A9';

let myButtonStart = document.getElementById('buttonStart');
let timeId;
let count = 0;
let flag = true;

function myTimerStart(){
	timeId = setInterval(() => {
			console.log(count++);
	}, 1000)
	flag = false;
}

function myTimerStop(){
	clearInterval(timeId);
	flag = true;
}

function checkingFlag(){
	(flag) ? myTimerStart() : myTimerStop();
}
myButtonStart.addEventListener('click', checkingFlag);











