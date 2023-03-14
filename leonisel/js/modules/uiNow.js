import {currentTemperatureElement, currentCityNameElement} from './domElements.js';

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

export function getDataInputSubmit(form) {
  form.addEventListener('submit', getDataInput)
}

function getDataInput(event) {
  event.preventDefault();
  const inputValue = event.target[0].value;
  let cityName = inputValue;
  let url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
  sendGetInfoServer(url);
}

function sendGetInfoServer(url) {
  fetch(url)
    .then(response => response.json())
    .then(result => {
      console.log(result);
      const cityName = result.name;
      const currentTemperature = Math.trunc(result.main.temp - 272);
      addUiCityTemperature(cityName, currentTemperature);
    });
}

function addUiCityTemperature(cityName, currentTemperature) {
  currentTemperatureElement.textContent = currentTemperature.toString();
  currentCityNameElement.textContent = cityName;
}
