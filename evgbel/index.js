// console.log("900 > 9000", 900 > 9000); // false
// console.log(`"900" > "9000"`, "900" > "9000"); // false
// console.log(`"2" > +"12"`, "2" > +"12"); // false
// console.log("undefined == null", undefined == null); // true
// console.log("undefined === null", undefined === null); // false
// console.log("undefined === 'undefined'", undefined === 'undefined'); // false
// console.log("undefined == 'undefined'", undefined == 'undefined'); // false
// console.log(`null == +"\n0\n"`, null == +"\n0\n"); // false
// console.log(`null >= +"\n0\n"`, null >= +"\n0\n"); // true
// console.log("90 >= undefined", 90 >= undefined); // false
// console.log("bmw < mersedes", "bmw" < "mersedes"); // true
// const a = [1, 3, 4, 5];
// const b = [1, 3, 4, 5];
// console.log("a==b", a==b);// false
// console.log("a===b", a===b);// false
// const c = Symbol ('mersedes')
// const d = Symbol ('mersedes')
// console.log(c === d);
// console.log(NaN == 0);


// if (password.length > 8 && (hasSpecialChars(password) || hasCapitalChars(password)));

// if(("bmw" < "mersedes") || )

// if ("bmw" < "mersedes") {
//  console.log("mersedes better ;-)");
// } else{
//  console.log("never mind!");
// }

// const age = 40
// if (age>=18 && age<=90) {
// console.log("true");
// } else {console.log("false")};

// if(!(age>=14) && !(age<=90)){
//  console.log("false");
// } else {console.log("true")};


// const area = 100;
// const street = '3-d street'
// if (area >= 100 || (area >= 80 && street === 'Main Street')){
//  console.log('satisfies');
// } else {
//  console.log('does not satisfy');
// }

// const temperature = 20
// if (temperature <= 0){
//  console.log('cold');
// } else if (temperature > 0 && temperature <= 10){
//  console.log('not enough warm');
// } else if (temperature > 10 && temperature <= 21){
//  console.log('warm');
// } else {
//  console.log('hot');
// }

// const number = -100
// number >= 0 ? console.log(number) : console.log(-number);

// function maim(depth) {
// var depth = parseInt(readLine(), 10)
// const x = 7
// const y = -2
// let day = 0
// i = 0
// while (i < depth) {
//  day++
//  i+=x+y
// }
//  for (i = 0; i < depth;) {
//   day++ 
//   i = i + 7
//   if (i >= depth) {
//    break
//   } else {
//    i = i - 2     
//   } 
//  }
//  console.log(day);
// }
// maim(31)

// let a = prompt('Первое число')
// let b = prompt('Второе число')
// let a = 1
// let b = 'one'

// let result
// if (!isNaN(a) && !isNaN(b)){

//  result = Number(a) + Number(a) < 21? 'Ещё!': 'Себе!'
//  } else {
//    result = 'введите число!'
//  }
// alert (result)

// console.log( !isNaN('7'))
// console.log(Boolean(Number (a)) && Boolean(Number (b)))

// let login = prompt('Логин', '');
// let password;

// if (login === 'Админ') {
//  password = prompt('Введите пароль', '');// Вопрос получается этот if (1) идет
//  if (password === 'яглавный') {//Вот этот (2)
//   alert('Здравствуйте');
//  } else if (login == '' || login == null) {
//   alert('Отменено');
//  } else {
//   alert('Неверный пароль!'); // идет сюда(2)?? 
//  } if (password == '' || login == null) {
//   alert('Отменено')
//  }} else {
//  alert('ТЫ хто епта');} // на этот else 1) ??


// function loginFunc(login) {
//  if (login === 'admin') {
//   alert('enter password')
//   console.log('enter password');
//  } else if (login == '' || login == null) {
//   alert('cancel')
//   console.log('cancel');
//   return
//  } else {
//   alert('who are you?')
//   console.log('who are you?');
//  }
// }

// function passFunc(password) {
//  if (password === 'pas') {
//   alert('hello!')
//   console.log('hello!');
//  } else if (password == '' || password == null) {
//   alert('cancel')
//   console.log('cancel');
//   return
//  } else {
//   alert('wrong')
//   console.log('wrong');
//  }
// }

// loginFunc(prompt('Логин', ''))
// passFunc(prompt('Введите пароль', ''))


// const isEven = (num) => {
//  return num % 2 === 0;
// }

// // функция увеличивает полученное число num на 10
// const increaseNum = (num) => {
//  return num + 10;
// }

// const num = 6;

// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;


// let login = prompt('login', '');
// let password = prompt('password', '');

// if (!(login == '' || password == '')) {
//  (login === 'Админ' && password === 'яглавный') ? alert('Здравствуйте!') : alert('ТЫ хто епта?') 
//  } else {
//   alert('Отменено') 
//  }

// if (!(password == '' || password == null)){
//  password === 'яглавный' ? alert('Здравствуйте') : alert('Неверный пароль!')
//  } else  {
//   alert('Отменено');
//  } 

// const convertText = (text) => {
//  if (text == ''){
//    return text
//  } else if (text[0] == text[0].toUpperCase()){
//   return text
//  } else {     
//    return reverse(text)
//  }
//  console.log(text)
// }

// function checkAge(age) {
//  if (age < 18) {
//   alert('you are not allowed');
//  } else {
//   alert('you are welcome!');
//  }
// }

// checkAge(prompt('how old are you?', ''))


// function calc(a, b, operation) { 
//  if(operation == 'add') {
//   return a + b;
//  } else if (operation == 'multiply') {
//   return a * b
//  } else if (operation == 'subtract') {
//   return a - b
//  } 
// }

// const add = calc(1, 2, 'add'); console.log(add);
// const multiply = calc(1, 2, 'multiply'); console.log(multiply);
// const subtract = calc(1, 2, 'subtract'); console.log(subtract);

//  const multiply = a * b;
//  const subtract = a - b;
// calc (1, 2, add)

// const firstNum = prompt('enter first number', '')
// const secondNum = prompt('enter second number', '')
// const operation = prompt('enter +, -, x, or :', '')

// function calc(a, b, operation) {
//  if (operation == '+') {
//   const sum = Number(a) + Number(b)
//   alert(sum);
//  } else if (operation == 'x') {
//   const multiply = Number(a) * Number(b)
//   alert(multiply);
//  } else if (operation == '-') {
//   const subtract = Number(a) - Number(b)
//   alert(subtract);
//  } else if (operation == ':') {
//   let division = (Number(b) === 0) ? 'error!!!' : a / b
//   alert(division);
//  }
// }




// console.log(typeof(add));


const firstNum = prompt('enter first number', '')
const secondNum = prompt('enter second number', '')
const operation = prompt('enter +, -, x, or /', '')

function calc(a, b, operation) {
 switch (operation) {
  case '+':
   const sum = Number(a) + Number(b)
   alert(sum);
   break;
  case '-':
   const subtract = Number(a) - Number(b)
   alert(subtract);
   break;

  case '*':
   const multiply = Number(a) * Number(b)
   alert(multiply);
   break;

  case '/':
   const division = (Number(b) === 0) ? 'error!!!' : a / b
   alert(division);
   break;

  default:
   alert('error! Choose from the suggested options')
   break;
 }
}
calc(firstNum, secondNum, operation)