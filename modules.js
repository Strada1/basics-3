import {saveResult} from './script.js'
import {UI} from './constants.js'

UI.equal.addEventListener('click', function() {

	let num_val1 = UI.num1.value
	let num_val2 = UI.num2.value
	let operator_val = UI.operator.value
   
	if (!num_val1 || !num_val2){
		alert('Пустые значения недопустимы!')
		return
	}

	switch (operator_val) {
		case '+':
			UI.result.textContent = +(+num_val1 + +num_val2).toFixed(2);
			break;
		case '-':
			UI.result.textContent = +(+num_val1 - +num_val2).toFixed(2);
			break; 
		case '*':
			UI.result.textContent = +(+num_val1 * +num_val2).toFixed(2);
			break; 
		case '/':
			if (+num_val2 === 0) {
				alert('На 0 делить нельзя!')
				UI.result.textContent = ''
			} else {
				UI.result.textContent = +(+num_val1 / +num_val2).toFixed(2);
			}			
			break; 
		default:
			console.log('Что-то пошло не так')		
	};

	// добавление
	saveResult(UI.result, UI.results)
})