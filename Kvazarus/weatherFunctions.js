import { htmlObjects } from "./weatherHtmlObjects.js";

const { searchForm, searchInput, spansCityTemperature, containersCityName, pageNowImg } = htmlObjects;


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


async function sendPromiseToGetData(url) {
    try {
        const responceData = await fetch(url);
        if (responceData.ok) {
            const receivedDataJSON = await responceData.json();
            //console.log(receivedDataJSON);
            let cityTemperature = receivedDataJSON.main.temp - 273; // Перевод из кельвинов в цельсий
            cityTemperature = Math.round(cityTemperature);
            //console.log(cityTemperature);
            const weatherConditionsImgSrc = receivedDataJSON.weather[0].icon;
            //console.log(weatherConditionsImgSrc);
            return { cityTemperature, weatherConditionsImgSrc };
        } else {
            throw new Error(responceData.status);
        }
    } catch (err) {
        console.log("Произошла ошибка при запросе данных");
        console.log(err);
        return { cityTemperature: "error", weatherConditionsImgSrc: null };
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