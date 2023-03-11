const userNameInput = document.querySelector(".userName");
const button = document.querySelector(".button");
button.addEventListener("click", getName);

async function getName(event) {
  event.preventDefault();
  const serverUrl = "https://api.genderize.io";
  const userName = userNameInput.value;
  const url = `${serverUrl}?name=${userName}`;

  const response = await fetch(url);
  if (response.ok) {
    let name = await response.json();
    console.log(`${userName} is ${name.gender}`);
  } else {
    console.log("Gender is not found");
    alert("Ошибка HTTP: " + response.status);
  }
}
