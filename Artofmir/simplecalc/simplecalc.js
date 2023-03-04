const entr = document.getElementById('enter');
const outpt = document.getElementById('span');

let acc = 0;

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

removeDiv = (divNum) => {
  divNum.remove();
};

createDiv = (data) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = data;
  newDiv.className = 'removable';
  const newSpan = document.querySelector('#output');
  newSpan.insertBefore(newDiv, outpt);
  newDiv.addEventListener('click', function (e) {
    e.stopPropagation();
    removeDiv(newDiv);
  });
};

calculate = () => {
  
  const numberOne = Number(document.getElementById('firstNumber').value);
  const numberTwo = Number(document.getElementById('secondNumber').value);
  const calcOperation = document.querySelector('#oper').value;

  console.log(`enter: a = ${numberOne} , b = ${numberTwo}, oper: ${calcOperation}`);

  let result = calc (numberOne, numberTwo, calcOperation);

  if ((typeof result) == 'string') {

    outpt.textContent = result;
    acc = result;

  } else {

    outpt.textContent = parseFloat(`${result.toFixed(6)}`);
    result = parseFloat(result.toFixed(6));

  };

  if (result !== acc) {

    createDiv(acc);
    acc = parseFloat(`${result.toFixed(6)}`);

  };
};

entr.addEventListener('click', calculate);



