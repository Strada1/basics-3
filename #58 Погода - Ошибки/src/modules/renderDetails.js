import {
    details__city, details__temp, details__feeltemp,
    details__weather, details__sunrise, details__sunset,
    details__windspeed
} from './consts.js'


// Функция отрисовки таба details
function renderDetails(main, name, sys, weather, wind) {

    details__city.textContent = name;
    details__feeltemp.innerHTML = toFixed(main.feels_like) + '&#176';
    details__temp.innerHTML = toFixed(main.temp) + '&#176';
    details__windspeed.textContent = toFixed(wind.speed);
    details__weather.textContent = weather[0].main
    details__sunrise.textContent = getTime(sys.sunrise);
    details__sunset.textContent = getTime(sys.sunset);

}


function toFixed(num) {
    return Math.floor(num);
}

function getTime(unix) {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = hours + ':' + minutes;

    return time
}


export default renderDetails;