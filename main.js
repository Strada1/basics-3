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
      solution.textContent = +a.value + +b.value;
      break;
    case '/':
      solution.textContent = +a.value / +b.value;
			break;
    case '*':
      solution.textContent = +a.value * +b.value;
			break;
    case '-':
      solution.textContent = +a.value - b.value;
			break; 
  }
});
