
const input = document.getElementById('input')  
const button = document.getElementById('button')  
const form = document.getElementById('form')
const serverUrl = 'https://api.genderize.io'; 



  

async function addCard(event){
  event.preventDefault()
  const inputValue = input.value;
  const url = `${serverUrl}?name=${inputValue}`;
  if(inputValue == ''){
    alert('Строка пустая')
  }
  if(!inputValue == ''){
    let response =  await fetch(url);
    const json = await response.json();
    let gender = json.gender
    gender === null ? alert(new Error('gender error'))
    : alert(inputValue + ' ' + 'is' + ' ' + gender) 
  }
 
}
button.addEventListener('click',addCard)