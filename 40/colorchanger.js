const elem = document.getElementById('cha');
const value = elem.getAttribute('data-color');

function buttonClickHandler() {
	document.body.style.backgroundColor = value;
}

elem.addEventListener('click', buttonClickHandler);
