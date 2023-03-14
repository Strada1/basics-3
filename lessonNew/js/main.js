
import { elements } from "./elements.js";

function showDetails(event) {
  if (event.target.classList.contains('button__now')) {
    elements.blockNow.style.display = 'block'
    elements.blockDetails.style.display = 'none'
    elements.blockForecast.style.display = 'none'
  } else if (event.target.classList.contains('button__details')) {
    elements.blockNow.style.display = 'none'
    elements.blockDetails.style.display = 'block'
    elements.blockForecast.style.display = 'none'
  } else if (event.target.classList.contains('button__forecast')) {
    elements.blockNow.style.display = 'none'
    elements.blockDetails.style.display = 'none'
    elements.blockForecast.style.display = 'block'
  }
}

function render(name, src, temp) {
  elements.city.textContent = name;
  elements.tempCity.textContent = `${Math.round(temp)}°`;
  elements.srcImg.src = `https://openweathermap.org/img/wn/${src}@2x.png`;
}


function search(event) {
  event.preventDefault()
  const cityName = elements.searchCity.value
  const url = `${elements.serverUrl}?q=${cityName}&appid=${elements.apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      render(response.name, response.weather[0].icon, response.main.temp)
      return response
    })
    .catch(err => console.log(err.message))
    .finally(elements.searchCity.value = '')
}

document.addEventListener('click', showDetails)

elements.buttonSearch.addEventListener('click', search)