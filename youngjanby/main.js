const serverUrl = 'https://api.genderize.io';

async function getGender() {
    const DataInInput = document.getElementById('inputData')
    let data = await fetch(`${serverUrl}?name=${DataInInput.value}`)
    let json = await data.json();
    let getGenderForUser = json.gender;

    if(data.ok) {
        alert(`"${DataInInput.value} is ${getGenderForUser}"`)
    } else {
        alert(`Ошибка HTTP: ${data.status}`)
    }
}

document.getElementById('btn').addEventListener('click', getGender)



