import renderTabNow from './renderTabNow.js';
import { serverUrl, apiKey } from './consts.js';

// Функция получения названия города из input
// Получает данные погоды
// Передает данные в функцию renderTabNow (отрисовывает данные в табе Now)
// Добавить валидацию - исключить пробелы и любые знаки
// TODO: Передедает данные в функцию renderDetails (отрисовывает данные в табе Details)
// TODO: Передает данные в функцию renderForecast (отрисовывает данные в табе Forecast)
async function searchFetch(event) {
    event.preventDefault()

    const now__city = event.target[0].value;
    let data = await getData(now__city);
    
    if (data === null) return;

    let {main, weather, name} = data;

    renderTabNow(main, weather, name);
    // TODO: renderDetails()
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

        if (data.cod !== 200 ) throw new Error(`Город с названием "${now__city}" не найден`)

        return data

    } catch (error) {

        alert(error.message);
        return null
    }
}

export default searchFetch;