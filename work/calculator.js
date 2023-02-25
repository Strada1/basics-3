
const equal = document.querySelector(".calc__equals");

function go() {

	const firstNumber = document.querySelector(".first-number").value;
	const secondNumber = document.querySelector(".second-number").value;
	const operation = document.querySelector(".calc__select").value;
	const result = document.querySelector(".calc__list-result");
	if (operation === '+') {
		result.textContent = Number(firstNumber) + Number(secondNumber);
	}
	if (operation === '-') {
		result.textContent = Number(firstNumber) - Number(secondNumber);
	}
	if (operation === '*') {
		result.textContent = Number(firstNumber) * Number(secondNumber);
	}
	if (operation === '/') {
		result.textContent = Number(firstNumber) / Number(secondNumber);
	}
}
equal.addEventListener('click', go);

