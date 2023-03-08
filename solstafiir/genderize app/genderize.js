const form = document.querySelector(".form");

function genderize(event) {
  const textField = document.querySelector(".text-field");
  const firstName = textField.value;

  const serverUrl = "https://api.genderize.io";
  const url = `${serverUrl}?name=${firstName}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.name === "") {
        alert("Name field can`t be empty!");
      } else {
        alert(data.name + " is " + data.gender);
      }
    })
    .catch((error) => console.error(error));
  event.preventDefault();
  event.target.reset();
}

form.addEventListener("submit", genderize);
