function checkAge(age) {
  const check = prompt('Укажите пожалуйста ваш возраст?')
  if (check >= 18) {
    alert('Все хорошо, проходите дальше!')
  } else {
    alert('Извините, но вам нет 18, немендленно покиньте сайт!')
  }
}
checkAge(18)



function calc(operation, a, b) {

  switch (operation) {
    case 'add':
      return a + b;

    case 'multi':
      return a * b;

    case 'subtract':
      return a - b;
  }
}

console.log(calc('add', 2, 1));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));

