const form = document.body.querySelector('.input-city');

//const temperature = document.body.querySelector('.temperature');
async function getCityWeather() {
    const city = document.body.querySelector('.city');

    const cityName = city.value;
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let response = await fetch(url);
    if (response.ok) {
        let cityWeather = await response.json();
        let temp = Math.round(cityWeather.temp - 273);

        // temperature = `${temp}°`;

    }
}