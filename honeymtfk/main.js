const firstNumInput = document.getElementById('firstNum');
const secondNumInput = document.getElementById('secondNum');
const itemBoxSelect = document.getElementById('itemBox');
const resultButton = document.getElementById('resultBtn');
const spanResult = document.getElementById('respn');

function calc () {
    switch (itemBoxSelect.value) {
        case ("add"):
            return spanResult.textContent = Number(firstNumInput.value) + Number(secondNumInput.value);
        case ("multi"):
            return spanResult.textContent = Number(firstNumInput.value) * Number(secondNumInput.value);
        case ("sub"):
            return spanResult.textContent = Number(firstNumInput.value) - Number(secondNumInput.value);
        case ("div"):
            return spanResult.textContent = Number(firstNumInput.value) / Number(secondNumInput.value);
        default:
            alert ("Error!!!");
    }
}

function addDiv() {
	let div = document.createElement('div');
	console.log(div);
	div.textContent = calc();
	console.log(div);
}
resultButton.addEventListener ('click', calc);
resultButton.addEventListener ('click', addDiv);