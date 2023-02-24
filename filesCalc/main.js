const numA = document.getElementById('a');
const numB = document.getElementById('b');
const operants = document.getElementById('operantsAll');
const myButton = document.getElementById('myButton');
const allResult = document.getElementById('resultSpan');
const divTextLog = document.createElement('div');


const ERRORS = {
	NULL: 'Есть пустые поля',
	DEVIDE: 'Такой не приму',
}

function calc(){
	let resultSum;
	const newNumA = +numA.value;
	const newNumB = +numB.value;
	const newOperantsAll = operants.value;

	if(numA.value === '' || numB.value === ''){
			return document.getElementById('resultSpan').textContent = ERRORS.NULL;
		}else if( operants.value === 'divide' && +numA.value === 0){
			return document.getElementById('resultSpan').textContent = ERRORS.DEVIDE;
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
			document.getElementById('resultSpan').textContent = resultSum;
	}
	}


myButton.addEventListener('click', calc);
