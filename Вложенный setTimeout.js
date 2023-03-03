/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/

let timerId = setTimeout(function tick() {
	// Выводим tick спустя 2000 мс
  console.log('tick');
	// Присваиваем timerId setTimeout(tick, 2000), т.е. ту же функцию
  timerId = setTimeout(tick, 2000); // (*)
}, 2000);
