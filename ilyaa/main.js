let one = document.getElementById('num1');
let two = document.getElementById('num2');
let a = one.value;
let b = two.value;
let operator = document.getElementById('operator');
let result = document.getElementById('result');
let submit = document.getElementById('submit');



let calculate = function() {
  let selectValue = operator.value;
  let a = +one.value;
  let b = +two.value;
  let res;

     switch(selectValue) {
    case '+':
      res = a + b;
      break;
      
    case '-':
      res = a - b;
      break;
        
    case '*':
      res = a * b;
      break;
          
    case '/':
      res = a / b;
      break;
    };
   alert(+res);
     result.innerHTML= res;
};

submit.addEventListener('click', calculate);