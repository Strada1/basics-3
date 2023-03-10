const getForm = document.querySelector("#getDiv");
const button = document.querySelector("#button");

async function getText(event) {
  event.preventDefault();
  const input = document.querySelector(".input");
  const serverUrl = "https://api.genderize.io";
  const yourName = `${input.getAttribute("value")}`;
  const url = `${serverUrl}?name=${yourName}`;
  console.log(url);
  const promise = await fetch(url);
  const getAns = await promise.json();
  console.log(getAns);
  const answer = getAns.gender;
  alert("Your sex is: " + answer);
}

button.addEventListener("click", getText);
getForm.addEventListener("submit", getText);
