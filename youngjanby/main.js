let firstNumber = document.getElementById('firstNumber')
let operation = document.getElementById('operation-select');
let secondNumber = document.getElementById('SecondNumber')
let button = document.getElementById('ButtonResultOperation');
let resultText = document.getElementById('result')
let TheResult = 0;

function wtf() {
  let valueFirst = firstNumber.value;
  let valueSecond = secondNumber.value;

  
    switch(operation.value){
      case 'add': 
        TheResult = +valueFirst + +valueSecond;
        resultText.textContent = TheResult;
        break;
      case 'multi':
        TheResult = +valueFirst * +valueSecond;
        resultText.textContent = TheResult;
        break;
      case 'subtract':
        TheResult = +valueFirst - +valueSecond;
        resultText.textContent = TheResult;
        break;
      case 'division':
        TheResult = +valueFirst / +valueSecond;
        resultText.textContent = TheResult;
        break;
  }

  if(operation.value === 'division' && +valueSecond === 0) {
    alert('Cannot be divided by 0')
    resultText.textContent = 'Retry enter Number'
  }
}

button.addEventListener('click', () => {
  try {
    wtf()
  } catch(err) {
    alert(`Возникла небольшая ошибка - ${err.message}`);
  }
});