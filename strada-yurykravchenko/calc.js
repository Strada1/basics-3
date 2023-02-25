const select = document.querySelector('.select');
let calcResult = document.querySelector('.calc__result');



function calc() {
let numOne = ++document.querySelector('.num-1').value
let selectValue = select.options[select.selectedIndex].value;
let numTwo = ++document.querySelector('.num-2').value


let result;

  switch(selectValue) {
    case '+':
      result = numOne + numTwo
      break
      
    case '-':
      result = numOne - numTwo
      break
        
    case '*':
      result = numOne * numTwo
      break
          
    case '/':
      result = numOne / numTwo
      break
    }
    
    return calcResult.textContent = result
}

export { calc, calcResult };

