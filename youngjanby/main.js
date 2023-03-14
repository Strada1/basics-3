const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

async function FirstTab() {
    let cityName = document.getElementById('search').value
    let data = await fetch(`${serverUrl}?q=${cityName}&appid=${apiKey}`)
    let json = await data.json();

    if(data.ok) {
            let degrees = Math.round(json.main.temp - 273)
            let imgSrc = json.weather[0].icon
            let ThisCity = json.name
        
            document.querySelector('.degrees').textContent = `${degrees} °`
            document.querySelector('.city_now').textContent = `${ThisCity}`
            document.querySelector('.pic_cloud').src = `icons/${imgSrc}.png`
        } else if(data.status === 404) {
            alert('This city is undefined');
        } else {
            alert(`Error HTTP: ${data.status}`)
        }
}

document.getElementById('button-search').addEventListener('click', FirstTab)