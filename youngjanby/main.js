const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
// const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

async function FirstTab() {
    let cityName = document.getElementById('search').value
    let data = await fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`)
    let json = await data.json();

    let degrees = Math.round(json.main.temp - 273)
    let imgSrc = json.weather[0].icon
    let ThisCity = json.name

    document.querySelector('.degrees').textContent = `${degrees} °`
    document.querySelector('.city_now').textContent = `${ThisCity}`
    document.querySelector('.pic_cloud').src = `icons/${imgSrc}.png`
    console.log(json)

    
}
document.getElementById('button-search').addEventListener('click', FirstTab)