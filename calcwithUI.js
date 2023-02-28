import { addElement } from './add_delete.js'

const button = document.getElementById('myButton');
let output = document.getElementById('result');
let result;

// калькулятор
function calc() {
  
  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  let operation = document.getElementById('selections').value;
    
 switch(operation) {
   case 'add':
     result = Number(input1) + Number(input2);
     return output.textContent = result;
        
     
   case 'multiply':
     result = Number(input1) * Number(input2);
     return output.textContent = result;
        
     
   case 'subtract':
     result = Number(input1) - Number(input2);
     return output.textContent = result;
        
     
   case 'devide':
     if (+input2 != 0) {
       result = Number(input1) / Number(input2);
       return output.textContent = result;
    } else {
        alert('а на ноль нельзя делить!');
    }
   
 }
}

button.addEventListener('click', calc);
button.addEventListener('click', addElement);
