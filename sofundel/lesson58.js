const SEARCH_FORM = {
    FORM: document.querySelector('#searchForm'),
    BUTTON: document.querySelector('#searchButton'),
    INPUT_TEXT: document.querySelector('#inputText'),
}

const NOW_TAB = {
    CITY: document.querySelector('#nowTabCity'),
    TEMPERATURE: document.querySelector('#nowTabTemperature'),
    WEATHER: document.querySelector('#nowTabWeather'),
}

const DETAILS_TAB = {
    CITY: document.querySelector('#detailsTabCity'),
    TEMPERATURE: document.querySelector('#detailsTabTemperature'),
    FEELS: document.querySelector('#detailsTabFeels'),
    WEATHER: document.querySelector('#detailsTabWeather'),
    SUNRISE: document.querySelector('#detailsTabSunrise'),
    SUNSET: document.querySelector('#detailsTabSunset'),
}

const SERVER = {
    SERVER_URL: 'http://api.openweathermap.org/data/2.5/weather',
    API_KEY: '9a4679d74d6b2705dcf83c96c7e6b1f9',
}

function checkEmptyField(cityName) {
    if (cityName.trim() === '') {
        SEARCH_FORM.INPUT_TEXT.style.backgroundColor = '#faebf1';
        setTimeout(() => { SEARCH_FORM.INPUT_TEXT.style.backgroundColor = 'white'; }, 400);

        return true;
    }
}


async function getResponseFromURL(cityName) {
    const url = `${SERVER.SERVER_URL}?q=${cityName}&appid=${SERVER.API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (response.ok) {
            return await response.json();
        } else {
            alert(`HTTP Error: ${response.status} - ${response.statusText}. Please try again.`);
            return false;
        }
    } catch (error) {
        alert(`Error: ${error.name} - ${error.message}. Please contact the developer.`);
    }
}

async function showInfo(event) {
    event.preventDefault();

    const cityName = SEARCH_FORM.INPUT_TEXT.value;
    SEARCH_FORM.FORM.reset();

    if (checkEmptyField(cityName)) {
        return;
    };

    const weatherInfo = await getResponseFromURL(cityName);

    if (!weatherInfo) {
        return;
    };

    NOW_TAB.CITY.textContent = weatherInfo.name;
    NOW_TAB.TEMPERATURE.textContent = `${Math.round(weatherInfo.main.temp)}°`;
    NOW_TAB.WEATHER.src = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`;

    const sunrise = new Date(weatherInfo.sys.sunrise * 1000);
    const sunset = new Date(weatherInfo.sys.sunset * 1000);

    DETAILS_TAB.CITY.textContent = weatherInfo.name;
    DETAILS_TAB.TEMPERATURE.textContent = `Temperature: ${Math.round(weatherInfo.main.temp)}°`;
    DETAILS_TAB.FEELS.textContent = `Feels like: ${Math.round(weatherInfo.main.feels_like)}°`;
    DETAILS_TAB.WEATHER.textContent = `Weather: ${weatherInfo.weather[0].main}`;
    DETAILS_TAB.SUNRISE.textContent = `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}`;
    DETAILS_TAB.SUNSET.textContent = `Sunset: ${sunset.getHours()}:${sunset.getMinutes()}`;
}

SEARCH_FORM.BUTTON.addEventListener('click', showInfo);

window.addEventListener('unhandledrejection', function (event) {
    alert(`Unhandled error ("${event.reason}").  Please contact the developer.`);
    return;
});