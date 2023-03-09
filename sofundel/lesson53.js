function checkValid(firstName) {
    if (firstName.trim() === "") {
        return true;
    }
}

async function getResponseFromURL(firstName) {
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    const response = await fetch(url);

    if (response.ok) {
        const urlContent = await response.json(); 
        return String(urlContent.gender);
    } else {
        console.log("Ошибка HTTP: " + response.status);
        return "error";
    }

}

async function getGender(event) {
    event.preventDefault();

    const inputForm = document.querySelector("#inputForm");
    const firstName = document.querySelector("#inputText").value;
    const answerText = document.querySelector("#answerText");

    answerText.textContent = "";

    if (checkValid(firstName)) {
        answerText.textContent = "The field is empty";
        return
    };

    const gender = await getResponseFromURL(firstName);

    switch(gender) {
        case "error": answerText.textContent = "Oops... Something wrong! Please try again.";
        break;

        case "null": answerText.textContent = "Oops... Name is not defined! Please try again.";
        break;

        default:
        answerText.textContent = `${firstName} is ${gender}.`;
    }

    inputForm.reset();
}


const inputButton = document.querySelector("#inputButton");
inputButton.addEventListener("click", getGender);
