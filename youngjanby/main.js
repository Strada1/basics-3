const serverUrl = 'https://api.genderize.io';

async function getGender() {
    const DataInInput = document.getElementById('inputData').value
    let data = await fetch(`${serverUrl}?name=${DataInInput}`)
    let json = await data.json();
    let getGenderForUser = json.gender;

    if(data.ok && DataInInput) {
        alert(`"${DataInInput} is ${getGenderForUser}"`)
    } else if (!data.ok){
        alert(`Error HTTP: ${data.status}`)
    }

    if(!DataInInput) {
        alert('You didn\'t enter anything')
    }
}

document.getElementById('btn').addEventListener('click', getGender)