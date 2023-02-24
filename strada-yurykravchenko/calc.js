const select = document.querySelector('.select');
let calcResult = document.querySelector('.calc__result');
const calcButton = document.querySelector('.calc__nums');
let content = document.querySelector('.calculate__content');


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

calcButton.addEventListener('click', function() {
  calc();

  const resultContainer = document.createElement('div');
  resultContainer.classList.add('.result');
  content.appendChild(resultContainer)
  resultContainer.textContent = calcResult.textContent;

  if(resultContainer) {
    resultContainer.addEventListener('click', (evt) => {
      evt.target.remove();
    })
  }
})

