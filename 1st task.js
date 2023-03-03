//! Выводим числа каждую секунду от from до to через setInterval()

function printNumbers(from, to) {
	// timerId - уникальный идентификатор интервала
	let timerId = setInterval(() => {
		// Вывести число
		console.log(from);
		if (from === to) {
			clearInterval(timerId);
		}
		from++;
	}, 1000, from, to);
}

printNumbers(1, 10) 
