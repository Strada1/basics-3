import renderTabNow from './renderTabNow.js';
import renderTabDetails from './renderDetails.js'
import { serverUrl, apiKey } from './consts.js';
import isValid from './isValid.js';

// Функция получения названия города из input
// Получает данные погоды
// Передает данные в функцию renderTabNow (отрисовывает данные в табе Now)
// Добавить валидацию - исключить пробелы и любые знаки
// TODO: Передедает данные в функцию renderDetails (отрисовывает данные в табе Details)
// TODO: Передает данные в функцию renderForecast (отрисовывает данные в табе Forecast)
async function searchFetch(event) {
    event.preventDefault()

    const now__city = event.target[0].value;

    if (!isValid(now__city)) return

    let data = await getData(now__city);
    if (data === null) return;
    let { main, name, sys, weather, wind } = data;

    renderTabNow(main, weather, name);
    renderTabDetails(main, name, sys, weather, wind)
    // TODO: renderForecast()

    event.target[0].value = '';
}


// Функция получения данных погоды по текущему городу
// Создает url запрос
// Получает данные погоды
// Если запрос с ошибкой то выводит сообщение в alert
// Возвращает данные о погоде
async function getData(now__city) {

    const url = `${serverUrl}?q=${now__city}&appid=${apiKey}&units=metric`;

    try {

        let response = await fetch(url);
        let data = await response.json();

        if (response.status === 404) throw new Error(`Город с названием "${now__city}" не найден`)

        return data

    } catch (error) {

        alert(error.message);
        return null
    }
}

export default searchFetch;