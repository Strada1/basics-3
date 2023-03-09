

const button = document.querySelector("#button");
const form = document.querySelector("#mainDiv");

async function newFetch(e){
    const input = document.querySelector("#input");
    const serverUrl = 'https://api.genderize.io';
    const setyourName = `${input.setAttribute('value',`${input.value}`)}`;
    const yourName = `${input.getAttribute("value")}`
    const url = `${serverUrl}?name=${yourName}`;
    console.log(url)
    const promise =  await fetch(url)
    const getAns = await promise.json();
    console.log(getAns)
    const answer = getAns.gender
    alert("Your sex is: " + answer)
    e.preventDefault()
}

button.addEventListener("click", newFetch);
form.addEventListener("submit", newFetch);
