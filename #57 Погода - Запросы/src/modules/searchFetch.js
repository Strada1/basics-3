async function searchFetch(event) {
    event.preventDefault()

    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = event.target[0].value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    let data = await getData(url)
    console.log(data);

}

async function getData(url) {
    let response = await fetch(url);
    return await response.json()
}

export default searchFetch;