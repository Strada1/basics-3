import { htmlObjects } from "./weatherHtmlObjects.js";

const { searchForm, searchInput, spansCityTemperature, containersCityName, pageNowImg } = htmlObjects;


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


async function sendPromiseToGetData(url) {
    try {
        const responceData = await fetch(url);
        const receivedDataJSON = await responceData.json();
        console.log(receivedDataJSON);
        if (responceData.ok) {
            let cityTemperature = receivedDataJSON.main.temp - 273; // Перевод из кельвинов в цельсий
            cityTemperature = Math.round(cityTemperature);
            const weatherConditionsImgSrc = receivedDataJSON.weather[0].icon;
            return { cityTemperature, weatherConditionsImgSrc };
        } else {
            const errorText = "Error " + receivedDataJSON.cod + ": " + receivedDataJSON.message;
            console.log(errorText);
            alert(errorText);
            return { cityTemperature: "error" };
        }
    } catch (err) {
        console.log("Произошла ошибка при запросе данных, ошибка не со стороны пользователя");
        console.log(err);
        return { cityTemperature: "error" };
    }

}

async function takeCityDataFromForm(event) {
    event.preventDefault();

    const cityName = searchInput.value;
    searchInput.value = "";

    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    const { cityTemperature, weatherConditionsImgSrc } = await sendPromiseToGetData(url);
    
    if (cityTemperature === "error") {
        return;
    }

    containersCityName.forEach(container => {
        container.textContent = capitalizeFirstLetter(cityName);
    })

    spansCityTemperature.forEach(span => {
        span.textContent = cityTemperature;
    })

    const imageSrc = `http://openweathermap.org/img/wn/${weatherConditionsImgSrc}@2x.png` 
    pageNowImg.src = imageSrc;
}

export const addEventFunctions = { takeCityDataFromForm };