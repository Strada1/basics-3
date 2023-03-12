const mainCity = document.querySelector('.main-info__footer')
console.log(mainCity);
const weatherNow = document.querySelector('.main-info__top')
const mainInfo = document.querySelector('.main-info__image')
const detailsName = document.querySelector('.details')

async function someResult() {
  try {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=51.6605982&lon=39.2005858&appid=f502068790b79276ff9a60bf1bc97228&units=metric'
    let jsonUrl = await fetch(url)
    let resultJson = await jsonUrl.json()
    console.log(resultJson);
    return resultJson
  } catch (err) {
    console.error('Произошла ошибка!', err);
  }
}
  
someResult().then((item) => {
  mainNameCity.textContent = detailsNameTitle.textContent = item.name
  temperatureNow.textContent = `${Math.round(item.main.temp)}°`
  detailsTemperature.textContent = `Temperature: ${Math.round(item.main.temp)}°`
  detailsFeels.textContent = `Feels like: ${Math.round(item.main.feels_like)}°`
  mainImage.setAttribute('src', `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`)
  detailsWeather.textContent = `Weather: ${item.weather[0].main}`
  detailsSunrise.textContent = `Sunrise: ${new Date(item.sys.sunrise*1000).toLocaleTimeString().slice(0,-3)}`
  detailsSunset.textContent = `Sunset: ${new Date(item.sys.sunset*1000).toLocaleTimeString().slice(0,-3)}`
})

let mainNameCity = document.createElement('p')
mainCity.prepend(mainNameCity)
let temperatureNow = document.createElement('p')
weatherNow.append(temperatureNow)
let mainImage = document.createElement('img')
mainInfo.append(mainImage)
let detailsNameTitle = document.createElement('h3')
detailsName.prepend(detailsNameTitle)
let detailsList = document.createElement('ul')
detailsName.append(detailsList)
let detailsTemperature = document.createElement('li')
detailsList.prepend(detailsTemperature)
let detailsFeels = document.createElement('li')
detailsList.append(detailsFeels)
let detailsWeather = document.createElement('li')
detailsList.append(detailsWeather)
let detailsSunrise = document.createElement('li')
detailsList.append(detailsSunrise)
let detailsSunset = document.createElement('li')
detailsList.append(detailsSunset)