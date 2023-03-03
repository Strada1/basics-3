//? setTimeout (много раз)

function sayHi() {
  console.log('Hi!');
}

setTimeout(sayHi, 500) // Через 500 мс выведетеся Hi

function say(phrase, who) {
  console.log(phrase + ', ' + who + '?');
}

setTimeout(say, 1000, 'Как дела', 'Илья') // Через 1000 мс выведется Как дела, Илья?

//! Можно использовать стрелочные функции
setTimeout(() => console.log('Привет :)'), 1000) // Через 1000 мс выведется "Привет :)"

//! Передавать функцию !== запускать ее
// setTimeout(sayHi(), 1000) -> неправильно

//! Вызов setTimeout вернет уникальный timerId
let timerId = setTimeout(() => console.log('Это сообщение не выведется'))

//! По timerId можно остановить setTimeout
clearInterval(timerId) // очистить интервал с помощью clearInterval
console.log(timerId); // не станет null после clearInterval
