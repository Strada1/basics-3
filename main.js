const button = document.querySelector('.sendingButton');
const namePerson = document.querySelector('.name');

button.addEventListener('click', async function(){
    const firstName = namePerson.value
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
    let response =  await fetch(url);

if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json =  await response.json();
  alert(`${json.name} is ${json.gender}`)
} else {
  alert("Ошибка HTTP: " + response.status);
}
});