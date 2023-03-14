const tempNow = document.querySelector('#tempNow');
const imgWeatherNow = document.querySelector('#imgWeatherNow');
const cityName = document.querySelector('#cityName')

// Функция отрисовки таба Now
// Получает темпетаруру, url иконки и название города
// Отрисовывает данные в таб Now
function renderTabNow(main, weather, name) {
    let temp = Math.floor(main.temp);
    let iconId = weather[0].icon

    imgWeatherNow.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    tempNow.innerHTML = temp + '&#176'
    cityName.textContent = name;
}

export default renderTabNow;