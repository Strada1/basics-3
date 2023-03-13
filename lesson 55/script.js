const form = document.querySelector('.search')
const input = document.querySelector('.input-text')
const searchBtn = document.querySelector('.search-btn')
const mainCity = document.querySelector('.main-info__footer')
const weatherNow = document.querySelector('.main-info__top')
const mainInfo = document.querySelector('.main-info__image')
const detailsName = document.querySelector('.details')

const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const APPID_KEY = 'f502068790b79276ff9a60bf1bc97228'

async function getCity(e) {
 e.preventDefault()
 const resultFunc = await someResult()
 getProp(resultFunc)
 render()
 input.value = ''
}

async function someResult() {
 const inputCity = input.value
 const url = `${SERVER_URL}?q=${inputCity}&appid=${APPID_KEY}&units=metric`

 let jsonUrl = await fetch(url)
 try {
  let resultJson = await jsonUrl.json()
  console.log(resultJson);
  return resultJson
 } catch (err) {
  console.error('Произошла ошибка!', err);
 }
}

function getProp(resultFunc) {
 cityNameUrl = resultFunc.name
 temperatureUrl = Math.round(resultFunc.main.temp)
 mainImageUrl = `https://openweathermap.org/img/wn/${resultFunc.weather[0].icon}@4x.png`
 detailsFeelsUrl = Math.round(resultFunc.main.feels_like)
 detailsWeatherUrl = resultFunc.weather[0].main
 console.log(detailsWeatherUrl);
 detailsSunriseUrl = new Date(resultFunc.sys.sunrise * 1000).toLocaleTimeString().slice(0, -3)
 detailsSunsetUrl = new Date(resultFunc.sys.sunset * 1000).toLocaleTimeString().slice(0, -3)
}

function render() {
 let mainNameCity = document.createElement('p')
 let detailsNameTitle = document.createElement('h3')
 mainCity.prepend(mainNameCity)
 detailsName.prepend(detailsNameTitle)
 mainNameCity.textContent = detailsNameTitle.textContent = cityNameUrl

 temperatureNow = document.createElement('p')
 weatherNow.append(temperatureNow)
 let detailsList = document.createElement('ul')
 detailsName.append(detailsList)
 let detailsTemperature = document.createElement('li')
 detailsList.prepend(detailsTemperature)
 temperatureNow.textContent = `${temperatureUrl}°`
 detailsTemperature.textContent = `Temperature: ${temperatureUrl}°`

 let mainImage = document.createElement('img')
 mainInfo.append(mainImage)
 mainImage.setAttribute('src', mainImageUrl)

 let detailsFeels = document.createElement('li')
 detailsList.append(detailsFeels)
 detailsFeels.textContent = `Feels like: ${detailsFeelsUrl}°`

 let detailsWeather = document.createElement('li')
 detailsList.append(detailsWeather)
 detailsWeather.textContent = `Weather: ${detailsWeatherUrl}`

 let detailsSunrise = document.createElement('li')
 detailsList.append(detailsSunrise)
 detailsSunrise.textContent = `Sunrise: ${detailsSunriseUrl}`

 let detailsSunset = document.createElement('li')
 detailsList.append(detailsSunset)
 detailsSunset.textContent = `Sunset: ${detailsSunsetUrl}`

}

form.addEventListener('submit', getCity)
