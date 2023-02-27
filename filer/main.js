import {numA, numB, operants, myButton, allResult} from "./variables.js";
import {ERRORS} from './error.js'


function calc(){
	let resultSum;
	const newNumA = +numA.value;
	const newNumB = +numB.value;
	const newOperantsAll = operants.value;

if(numA.value === '' || numB.value === ''){
	return allResult.textContent = ERRORS.NULL;
}else if( operants.value === 'divide' && +numA.value === 0){
	return allResult.textContent = ERRORS.DEVIDE;
}else{
	switch(newOperantsAll){
		case 'plus':
			resultSum = newNumA + newNumB;
		break;
		case 'minus':
			resultSum = newNumA - newNumB;
		break;
		case 'multiply':
			resultSum = newNumA * newNumB;
		break;
		case 'divide':
			resultSum = newNumA / newNumB;
		break;
		}
		document.getElementById('resultSpan').textContent = resultSum.toFixed(2);
	}
	const wrapper = document.getElementById('cont');
	const lastHistory = document.createElement('div');
	lastHistory.classList.add('lastHistory');
	lastHistory.textContent = resultSum.toFixed(2);
	wrapper.appendChild(lastHistory);
	function deleteLastHistory(){
		lastHistory.remove();
	}
	lastHistory.addEventListener('click', deleteLastHistory);
	

}

myButton.addEventListener('click', calc);
