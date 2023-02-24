
  let result;
  const submit = document.querySelector('.res')
  submit.addEventListener('click', calculator)
  function calculator() {
     const one = Number(document.getElementById('num1').value);
     const two = Number(document.getElementById('num2').value);
     let operator = document.getElementById('operator');
     let result;
  
     switch (operator.value) {
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
  
     }
  
     document.getElementById("result").innerHTML = result;
  }
  