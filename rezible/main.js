import {genderForm, inputName, messagePlace, serverUrl, NAME_ERROR} from './view.js'
genderForm.addEventListener('submit', yourGender)
async function yourGender(event){
	event.preventDefault();
	const firstName = inputName.value;
	const url = `${serverUrl}?name=${firstName}`;
	try{
		if(!isValid(inputName)) throw new Error('Invalid First name')
		let response = await fetch(url);
		if (response.ok) {
			let json = await response.json();
			json.gender ? showSesUser(json.gender) : showUserError(NAME_ERROR.UNKNOWN_NAME);
		} else {
		throw new Error("error HTTP: " + response.status);
		}
	}
	catch(error){
		console.error(error)
	}
}
function isValid(name){
	messagePlace.textContent = "";
	name = name.value;
	let flag = true;
	(name === '') ? name = NAME_ERROR.EMPTY_FIRST_NAME : (/[^a-zA-Z-а-яА-ЯЁё]/.test(name)) ?  name = NAME_ERROR.INVALID_FIRST_NAME : flag = false;
	if(flag){
		showUserError(name);
		messagePlace.classList.add('message__error');
		return false;
	}
	messagePlace.classList.remove('message__error')
	return true;
}
function showUserError(error){
	messagePlace.textContent = error;
}
function showSesUser(sex){
	switch(sex){
		case 'male':
			sex = "мужской";
			break;
		case 'female':
			sex = "женский";
			break;
	}
	messagePlace.textContent = `Ваш пол ${sex}`;
}
