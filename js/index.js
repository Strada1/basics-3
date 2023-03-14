import { addTask } from "./addTask.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

const input = document.getElementById('input')
const buuton = document.getElementById('input')

async function add(event){


    if (event.code === 'Enter'){
            
            event.preventDefault();
            const cityName = input.value;
            const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

            let response = await fetch(url)
            const json = await response.json()

            let weatherName = json.name
            let weatherIcon = json.weather[0].icon
            let weatherTemperature = json.main.temp - 273

            addTask(weatherName,weatherTemperature,weatherIcon)
        }
    
}



input.addEventListener('keyup',add)
