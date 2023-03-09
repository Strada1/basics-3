const genderForm = document.querySelector('#gender');
const inputName = document.querySelector('#user__name');
const messagePlace = document.querySelector('.message__place');
const serverUrl = 'https://api.genderize.io';
const NAME_ERROR = {
	EMPTY_FIRST_NAME: "Поле имени не может быть пустым",
	INVALID_FIRST_NAME: "Имя может содержать только буквы",
	UNKNOWN_NAME: "Извините, для данного имени мы не можем определить пол"
}
export {genderForm, inputName, messagePlace, serverUrl, NAME_ERROR}