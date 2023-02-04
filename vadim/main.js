function someFunc(){
    console.log('function starts here');
    //
    console.log('function ends here');
}
someFunc();
////////////////////////////////////////////////


function sayHi (name) {
    const greeting = 'Хэй, ' + name + '!' ;
    console.log(greeting);
}
 sayHi('вася');
 sayHi('Petr');
 /////////////////////////////////////////



  function checkAge(age) {
if ( age < 18) {
console.log('you are not'); }
else if (age >= 18) {
   console.log('welcome!'); } 
  }

checkAge(20);
checkAge(10);


//Добавьте условие: если age меньше 18 - выводите в консоль
// “you are not allowed”, а если больше или равно то “you are welcome!”
//Попробуйте вызвать эту функцию несколько раз чтобы проверить ее работу

//.....................................................


function sayHi(name = 'Пользователь') { // если имя не передано - используй строку "пользователь"
    const greeting = 'Хэй, ' + name + '!';
      console.log(greeting);
  }
  
  sayHi(); // Хэй, Пользователь!

  //....................................

  let user = 'Миша'; // Объявим внешнюю переменную user

function changeUserName() { // создадим функцию которая 
  user = 'Гриша'; // меняет имя и
	console.log(user); // выводит его в консоль
}

changeUserName(); // Гриша

/*Попробуйте сами:
Создайте простую функцию калькулятор с именем сalc()
С тремя параметрами a и b, а также operation
Вызов сalc(‘add’, 1, 2) - возвращает 3
Вызов сalc(‘multi’, 1, 2) - возвращает 2
Вызов сalc(’subtract’, 3, 2) - возвращает 1
Делить пока ничего не надо.*/

/*
function calc(operation, a, b) {
if ( operation === 'add') {    //switch(operation) { case 'add':
 console.log(a + b, 'add'); }// ......     [break]
else if (operation === 'multi') { //case 'multi': ....... [break]
 console.log(a * b); }
else if (operation === 'subtract') { // case 'subtract':
    console.log(a - b);}
}  //      } 

calc(`add`,1,2);// 3 add
calc(`multi`,3,8); // 24
calc(`subtract`, 9, 5); //4 
*/
/*
function calc(operation = '', a , b ) {
    switch(operation) {
      case 'add':
        return a + b;
  
      case 'multi':
        return a * b;
  
      case 'subtract':
        return a - b;
  
      case 'division':
      default:
        return 'There is no such operation!';
    }
  }
  
  const result = calc('subtract', 7, 9); 
  console.log(result); //-2
*/

// function calc_2(operation, a, b) {
//        switch(operation) {
//          case 'add':
//         console.log(a + b, ' it is add'); 
//         break;
//         case 'multi':
//             console.log(a * b, 'it is multi');
//             break;
//         case 'subtract':
//            console.log(a - b, ' it is subtract');
//            break;
//            default:
//             console.log('?? WTF !!');
//        }
//     }
//     calc_2(`appa`, 4, 3);
