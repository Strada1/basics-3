let firstNumber = document.getElementById('firstNumber')
let operation = document.getElementById('operation-select');
let secondNumber = document.getElementById('SecondNumber')
let button = document.getElementById('ButtonResultOperation');
let resultText = document.getElementById('result')
let TheResult = 0;
let countTapButton = 0

function wtf() {
  let valueFirst = firstNumber.value;
  let valueSecond = secondNumber.value;
  countTapButton++
  
  
    if(operation.value === 'add') {
        TheResult = +valueFirst + +valueSecond;
        resultText.textContent = TheResult
    }else if(operation.value === 'multi') {
        TheResult = +valueFirst * +valueSecond;
        resultText.textContent = TheResult
    }else if(operation.value === 'subtract') {
        TheResult = +valueFirst - +valueSecond;
        resultText.textContent = TheResult
    }else if(operation.value === 'division') {
        TheResult = +valueFirst / +valueSecond;
        resultText.textContent = TheResult
    }
  
   if(operation.value === 'division' && +valueFirst < +valueSecond) {
     alert('Меньшее на большое не делится')
     resultText.textContent = 'Retry enter numbers..'
   }
}



button.addEventListener('click', wtf)