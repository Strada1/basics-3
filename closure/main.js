
//?	setInterval
function printNumbers(from, to){
	setInterval(() => {
		if(from <= to) alert(from++);
	}, 1000);
}

printNumbers(1, 5);

//?	setTimeout
function printNumbers(from, to){
	setTimeout(function run(){
		if(from <= to) alert(from++);
		setTimeout(run, 1000);
	}, 1000)
}

printNumbers(1, 5);