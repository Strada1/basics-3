import render from "./Render.js";

const inputForm = document.querySelector("#inputTown");
inputForm.addEventListener("submit", fun)
const buttonFind = document.querySelector("#buttonSearch")
buttonFind.addEventListener("click", fun)

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; //(этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате)



async function fun(e){
    e.preventDefault();
    const input = document.querySelector("#inputMain").value;
    const name = `${input}`;
    const url = `${serverUrl}?q=${name}&appid=${apiKey}&units=metric`;
    try{
        let response = await fetch(url);
        let json = await response.json();
        render(json.main, json.weather, name)
    }catch(err){
        alert("Ошибка!")
    }  
}

