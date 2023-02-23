const select = document.querySelector('.select');

let numOne = Number( document.querySelector('.num-1').value)
let selectValue = select.options[select.selectedIndex].value;
let numTwo = Number( document.querySelector('.num-2').value)
let calcResult = document.querySelector('.calc__result')




function calc() {
  let result;

  switch(selectValue) {
    case ('+'):
      result = numOne + numTwo
      console.log(result)
      break
      
      case '-':
        result = numOne - numTwo
        console.log(result)
        break
        
        case '*':
          result = numOne * numTwo
          console.log(result)
          break
          
          case '/':
            result = numOne / numTwo
      console.log(result)
      break
    }
    return calcResult.textContent = result
}

