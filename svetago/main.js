import {add, subtract, multi, divide, equals, result} from './1.js';


function calc() {
    var operation = document.getElementById('operation');
    var value = operation.options[operation.selectedIndex].value;
    const a = Number(document.getElementById('number1').value);
    const b = Number(document.getElementById('number2').value);
    
    function add_div() {
        const newDiv = document.createElement('div');
        newDiv.textContent = result.textContent;
        document.body.appendChild(newDiv);
  
        newDiv.addEventListener('click', remove);
  
        function remove() {
            // const element = document.querySelector('div');
            newDiv.remove();
          }
  
    }
  
    if (value === add) {
        result.textContent = a + b;
    }
    else if (value === subtract) {
        result.textContent = a - b;
    }
    else if (value === multi) {
        result.textContent = a * b;
    }
    else if (value === divide) {
        result.textContent = a / b;
    }
    add_div();
  }

equals.addEventListener('click', calc);

