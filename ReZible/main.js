/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }


if(browser === 'Edje'){
    alert( "You've got the Edge!" );
}
else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
} */


/* const number = +prompt('Введите число между 0 и 3', '');
if (number === 0) {
  alert('Вы ввели число 0');
}
if (number === 1) {
  alert('Вы ввели число 1');
}
if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
}

switch(number){
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
} */


let firstNumber = Number(prompt('Введите первое число'));
if(firstNumber === Number('')){
    alert("Вы не ввели первое число, попробуйте снова");
}
else if(isNaN(firstNumber)){
    alert("Вы ввели некорректное значение для первого числа, попробуйте снова");
}
else{
    let secondNumber = Number(prompt('Введите второе число'));
    if(secondNumber === Number('')){
        alert("Вы не ввели второе число, попробуйте снова");
    }
    else if(isNaN(secondNumber)){
        alert("Вы ввели некорректное значения для второго числа, попробуйте снова");
    }
    else
    {
        let selectedOperation = prompt("Выберите операцию: add/+, subtract/-, multi/*")
        let doOperation = (selectedOperation === null || selectedOperation === "") ? "Вы не выбрали операцию":
        (selectedOperation !== "add" &&
        selectedOperation !== "+" &&
        selectedOperation !== "subtract" &&
        selectedOperation !== "-" &&
        selectedOperation !== "multi" &&
        selectedOperation !== "*") ? "Вы ввели некорректную операцию" :
        calc(firstNumber,secondNumber,selectedOperation);
        alert(doOperation);
    }
}

function calc(a,b,operation){
    switch(operation){
        case 'add':
        case '+':
            const add = a+b;
            return add; 
        case "subtract":
        case "-":
            const subtract =a-b;
            return subtract;
        case "multi":
        case "*":
            const multi = a*b;
        return multi;
            
    }
}