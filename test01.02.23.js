let Num01 = prompt('Число1', ''); 
let Num02 = prompt('Число2', '');
let operation1 = prompt('Выражение: +,- или *','');

function calc(a,b,c) {
  if (operation=='+'){
      const sum= Number(a)+Number(b);
      alert (sum);
  } else if (operation1=='-'){
      const subt= Number(a)-Number(b);
      alert (subt);
  } else if (operation1=='*') {
      const multy= Number(a)*Number(b);
      alert (multy)
  }
}
calc (Num01,Num02,operation1);




let Num1 = prompt('Число1', ''); 
let Num2 = prompt('Число2', '');
let operation = prompt('Выражение: +,- или *','');

function calc(a,b,c) {
  switch (operation) {
      case'+': (operation=='+');
      const sum= Number(a)+Number(b);
      alert (sum);
      break;
      case'-': (operation=='-');
      const subt= Number(a)-Number(b);
      alert (subt);
      break;
      case'*': (operation=='*') ;
      const multy= Number(a)*Number(b);
      alert (multy) ;
      break;
      
      default:
      alert('error!');
      break;
}
}

calc (Num1,Num2,operation)




let Choise = prompt('Какой браузер - Edge,Chrome,Firefox,Safari or Opera','');

if (Choise==='Edge') {
alert ('Youve got the Edge')
} else if (Choise==='Chrome'
||Choise==='Firefox'
||Choise==='Safari'
||Choise==='Opera') {
alert ('Okay we support these browsers too')
} else {
alert('We hope that this page looks ok!')
}



const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
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
}
