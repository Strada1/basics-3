let one = document.getElementById('num1.value');
let two = document.getElementById('num2.value');
let operator = document.getElementById('operator');
let result = document.getElementById('result');
let submit = document.getElementById('submit');
let selectValue = operator.options[operator.selectedIndex].value;
let res;

let calculate = function() {


     switch(selectValue) {
    case '+':
      result = one + two;
      break;
      
    case '-':
      result = one - two;
      break;
        
    case '*':
      result = one * two;
      break;
          
    case '/':
      result = one / two;
      break;
    };
    alert(result);
    //return result.textContent = result
};

submit.addEventListener('click', calculate);