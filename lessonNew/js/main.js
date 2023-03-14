






const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '60f1603b521188954fab84ff45b62949';
const blockNow = document.querySelector('.weather__info-now')
const blockDetails = document.querySelector('.weather__info-details')
const blockForecast = document.querySelector('.forecast')
const searchCity = document.querySelector('.input__weather')
const buttonSearch = document.querySelector('.search__city')
const city = document.querySelector('.weather__city')
const tempCity = document.querySelector('.weather__temperature')
const cloud = document.querySelector('.hard__cloud')
function showDetails(event) {
  if (event.target.classList.contains('button__now')) {
    blockNow.style.display = 'block'
    blockDetails.style.display = 'none'
    blockForecast.style.display = 'none'
  } else if (event.target.classList.contains('button__details')) {
    blockNow.style.display = 'none'
    blockDetails.style.display = 'block'
    blockForecast.style.display = 'none'
  } else if (event.target.classList.contains('button__forecast')) {
    blockNow.style.display = 'none'
    blockDetails.style.display = 'none'
    blockForecast.style.display = 'block'
  }
}
const srcImg = document.querySelector('.hard__cloud')
function search(event) {
  event.preventDefault()
  const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
  const apiKey = '60f1603b521188954fab84ff45b62949';
  const cityName = searchCity.value
  const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(response => {
      city.textContent = response.name;
      tempCity.textContent = `${response.main.temp.toFixed(0)}°`;
      srcImg.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
      return response
    })
    .catch(err => console.log(err.message))
    .finally(searchCity.value = '')
}
document.addEventListener('click', showDetails)
buttonSearch.addEventListener('click', search)