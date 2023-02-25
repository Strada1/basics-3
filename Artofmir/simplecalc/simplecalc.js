let entr = document.getElementById('enter');

calc = (a, b, operation) => {

  switch (operation) {
    case 'add':
      return (a) + (b);
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'devide': {
        if (b === 0) {
          return "Деление на 0!";
        } else {
          return  a / b;
        };
      };
  };
};

entr.addEventListener('click', calculate = () => {
  
  let outpt = document.getElementById('span');
  let a = Number(document.getElementById('firstNumber').value);
  let b = Number(document.getElementById('secondNumber').value);
  let op = document.querySelector('#oper');
  let operation = op.value;

  console.log(`a = ${a} , b = ${b}, oper: ${operation}`);

  result = calc (a, b, operation);

  if ((typeof result) == 'string') {

    outpt.textContent = result;

  } else {

    result = result.toFixed(6);
    outpt.textContent = parseFloat(result);

  };
});



