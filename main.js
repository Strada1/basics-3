const a = document.getElementById('a');
const b = document.getElementById('b');
const operators = document.getElementById('operators');
const getSolutionButton = document.getElementById('getSolutionButton');
const solution = document.getElementById('solution');

getSolutionButton.addEventListener('click', () => {
  // Получаем оператор
  const operator = operators.options[operators.selectedIndex].value;
  switch (operator) {
    case '+':
      let plus = document.createElement('div');
      plus.textContent = +a.value + +b.value
      document.body.appendChild(plus);
      plus.addEventListener('click', (event) => {
        event.target.remove()
      })
      solution.textContent = +a.value + +b.value;
      break;
    case '/':
      let divide = document.createElement('div');
      divide.textContent = +a.value / +b.value
      document.body.appendChild(divide);
      divide.addEventListener('click', (event) => {
        event.target.remove()
      })
      solution.textContent = +a.value / +b.value;
      break;
    case '*':
      let mul = document.createElement('div');
      mul.textContent = +a.value * +b.value
      document.body.appendChild(mul);
      mul.addEventListener('click', (event) => {
        event.target.remove()
      })
      solution.textContent = +a.value * +b.value;
      break;
    case '-':
      let minus = document.createElement('div');
      minus.textContent = +a.value - +b.value
      document.body.appendChild(minus);
      minus.addEventListener('click', (event) => {
        event.target.remove()
      })
      solution.textContent = +a.value - b.value;
      break;
  }
});
