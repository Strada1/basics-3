async function Genderize(firstName) {

    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    
    let response = await fetch(url);
    return await response.json();
}


const output = document.querySelector('#output')

document.addEventListener('submit', e => {
    e.preventDefault()
    let firstName = e.target[0].value;

    Genderize(firstName)
        .then(data => {
            let {gender, name} = data;
            let message = `${name} is ${gender}`;
            output.textContent = message;
        })

    e.target[0].value = ''
})