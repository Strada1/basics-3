const HTML_ELEMENTS = {
    GENDER_RESULT: document.querySelector('#resultGender'),
    PROBABILITY_RESULT: document.querySelector('#resultProbability'),
    NAME_FORM: document.querySelector('#form'),
    NAME_INPUT: document.querySelector('#nameInput')
}
let firstName = 'artem';
const serverUrl = 'https://api.genderize.io';
let url = `${serverUrl}?name=${firstName}`;

HTML_ELEMENTS.NAME_FORM.addEventListener('submit', genderDefine)

async function genderDefine(event){
    event.preventDefault()
    firstName = HTML_ELEMENTS.NAME_INPUT.value;
    url = `${serverUrl}?name=${firstName}`;
    let result = await sendRequest()
    try{
        if(result.gender != null && result.probability != 0){
    HTML_ELEMENTS.GENDER_RESULT.textContent = result.gender
    HTML_ELEMENTS.PROBABILITY_RESULT.textContent = `${result.probability*100}%`}
    else{
        const error = new Error()
        error.name = "Value Error"
        error.message = "The wrong name given"
        return error
    }
    }catch(error){}

async function sendRequest(){
    let request = await fetch(url)
    let jsonRequest = await request.json()
    const result = {
        gender: jsonRequest.gender,
        probability: jsonRequest.probability
    }
    return result
    
}}