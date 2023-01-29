/*
console.log("HI, EVERYBODY!");

let userName = 'D';
let userAge = 21;
let nameChecked = true; 
let ageChecked = false; 
let a = 2;
let b = 5;
let f = a + b;
let what = "52";

console.log(userAge + a);
console.log(userAge + f);
console.log(true + true);
console.log(true + false);
console.log(what + userAge);
console.log(what - userAge + userName);


let x; 
console.log(x + 1);

console.log(f - userAge);

alert( userAge == a );
alert( a > b );
alert( f > a );
alert( what === userName );
alert( nameChecked != ageChecked );
alert( nameChecked !== ageChecked );

alert( nameChecked ==! ageChecked );
*/

/*
let company = prompt('Какое «официальное» название JavaScript?');

if (company == 'ECMAScript') {
  alert( 'Верно!' );
} 
 else {
  alert( 'Не знаете? ECMAScript!' );
}
*/

/*
let hour = 12;
let isWeekend = true;

if (false || false  || isWeekend) 
    {
  alert( 'Офис закрыт.' ); // это выходной
}
*/


/*
function checkAge(age) { //Объявите функцию с именем checkAge
 if(age < 18) {
  console.log('you are not allowed')
 } else if (age >= 18) {
  console.log('you are welcome!')
 }
}

checkAge(17);
*/


function calc(a, b, operation) {
  if (operation === 'add') {
      return (a + b)
  } else if (operation === 'multi') {
      return (a - b)
  } else if (operation === 'subtract') {
      return (a - b)
  } 
}

// console.log(calc(4, 8, 'subtract'))?

// вариант1
function calcSwitch (a, b, operation) {
  switch (operation) {
   case 'add':
    return a+b 
   
   case 'multi':
    return a*b
   
   case 'subtract':
    return a-b

   default:
    return 'Нет таких значений'
  }
}

console.log(calcSwitch(50, 20, 'add'))

//Вариант 2
function calc(a, b, operation) {
  switch (operation) {
      case "add":
          console.log(a + b);
          break;
      
      case "multi":
          console.log(a * b);
          break;
      
      case "subtract":
          console.log(a - b);
          break;
  }
}
calc(2, 10, "add")