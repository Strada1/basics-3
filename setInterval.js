//? setInterval (много раз)

let timerId = setInterval(() => console.log('tick'), 1000); // Каждые 1000 мс выполнять функцию

setTimeout(() => {
  clearInterval(timerId);
  console.log('Таймер остановлен спустя 5 секунд!');
}, 5000); // Спустя 5000 мс остановить таймер с id timerId и вывести информацию
/** вместо:
let timerId = setInterval(() => alert('tick'), 2000);
*/
