import renderTabNow from './renderTabNow.js'

// Функция получения названия города из input
// Получает данные погоды
// Передает данные в функцию renderTabNow (отрисовывает данные в табе Now)
// Добавить валидацию - исключить пробелы и любые знаки
// TODO: Передедает данные в функцию renderDetails (отрисовывает данные в табе Details)
// TODO: Передает данные в функцию renderForecast (отрисовывает данные в табе Forecast)
async function searchFetch(event) {
    event.preventDefault()

    const cityName = event.target[0].value;
    let data = await getData(cityName);
    
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
async function getData(cityName) {

    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = '4ffd32aaf968b4c03c60829ec4d46eb1';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    
    try {

        let response = await fetch(url);
        let data = await response.json();

        if (data.cod !== 200 ) throw new Error(`Город с названием "${cityName}" не найден`)

        return data

    } catch (error) {

        alert(error.message);
        return null
    }
}

export default searchFetch;