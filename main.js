// let age = 19

/*
Если переменная объявлена вне функции, 
то в объявлении функции эту переменную указывать не нужно
*/

// function checkAge ()
/*
Если одноимённая переменная объявляется в параметрах функции, 
то она перекрывает внешнюю. Параметр – не переменная
В результате внешняя age переменная будет проигнорирована.
*/

// {
//     if (age < 18) {
//         console.log ("You\'re not allowed")
//     }
//     else {
//         console.log ("You are welcome")
//     }
// }

// checkAge()
// console.log (age)

// Функция с возвратом значения
// function sum(a, b) {
// 	return a + b;
// }

// let result = sum(1, 3, 5);
// console.log(result); // 3 dd

// Программа с множеством if
function calc(operation, a, b) {

    if (operation == "add") {
     return a + b;
    }

    if (operation == "multi") {
        return a * b;
    }

    if (operation == "substract") {
        return a - b;
    }
}

let resultCalc = calc ("substract", 3, 2)

console.log (resultCalc)

// Программа calc со switch
function calcSwitch(operation, a, b) {
  switch (operation) {
    case 'add':
      return a + b;
      break;

    case 'multi':
      return a * b;
      break;

    case 'substract':
      return a - b;
      break;
  }

}

let resultCalcSwitch = calcSwitch('multi', 3, 2);

console.log(resultCalcSwitch);
