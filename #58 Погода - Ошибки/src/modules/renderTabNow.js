import { now__temp, now__img, now__city } from "./consts.js";

// Функция отрисовки таба Now
// Получает темпетаруру, url иконки и название города
// Отрисовывает данные в таб Now
function renderTabNow(main, weather, name) {
    let temp = Math.floor(main.temp);
    let iconId = weather[0].icon

    now__img.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`
    now__temp.innerHTML = temp + '&#176'
    now__city.textContent = name;
}

export default renderTabNow;