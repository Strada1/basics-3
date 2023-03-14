export function addTask(weatherName,weatherTemperature,weatherIcon){
    document.getElementById('name').textContent = weatherName
    document.getElementById('temperature').textContent = weatherTemperature.toFixed(1)
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`
}