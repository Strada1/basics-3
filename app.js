
const buttonCalc = document.querySelectorAll('.equals')[0]
const finalNumber = document.querySelectorAll('.finalNumber')[0]

function calculate(){
  const firstNumber = document.getElementById('firstNumber').value
  const lastNumber = document.getElementById('lastNumber').value
  const signAll = document.getElementById('select')
  const signSelected = signAll.querySelector(`option[value="${select.value}"]`).value  
  let result
  switch (signSelected) {
    case 'add':
      result = Number(firstNumber) + Number(lastNumber);
      break
    case 'sub':
      result = Number(firstNumber) - Number(lastNumber);
      break
    case 'mult':
      result=  Number(firstNumber) * Number(lastNumber);
      break
    case 'share':
      result =  Number(firstNumber) / Number(lastNumber);
      break
  }
  finalNumber.innerHTML = result

}

buttonCalc.addEventListener('click', calculate)