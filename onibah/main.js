const equals = document.querySelector('.calc__equals');
const select = document.querySelector('#mySelect');
function getSumm() {
	const firstInpt = document.querySelector('.calc__input_first-number').value;
	const secondInpt = document.querySelector('.calc__input_second-number').value;
	const listResult = document.querySelector('.calc__list-result');
	const calcResult = document.querySelector('.calc__result');

	function getValue(currentValue, numOne, numTwo) {
		let operations = {
			'+': numOne + numTwo,
			'-': numOne - numTwo,
			'*': numOne * numTwo,
			'/': numOne / numTwo,
		}
		if (numOne * numTwo === 0 && currentValue === '/') {
			calcResult.textContent = 'Ошибка'
			listResult.insertAdjacentHTML("beforeend", `<div style="color: red" class= "calc__result"> Ошибка </div>`)
		} else {
			if (Number.isInteger(operations[currentValue])) {
				calcResult.textContent = operations[currentValue];
				listResult.insertAdjacentHTML("beforeend", `<div  class="calc__result"> ${operations[currentValue]} </div>`)
			} else {
				calcResult.textContent = parseFloat(operations[currentValue]).toFixed(1);
				listResult.insertAdjacentHTML("beforeend", `<div  class="calc__result"> ${parseFloat(operations[currentValue]).toFixed(3)} </div>`)
			}
		}
	}
	getValue(select.value, +(firstInpt), +(secondInpt))

	document.addEventListener("click", function (e) {
		if (e.target.classList.contains('calc__result') && !e.target.classList.contains('calc__result_first')) {
			e.target.remove()
		}
	});
}
equals.addEventListener('click', getSumm)