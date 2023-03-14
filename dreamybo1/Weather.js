
const inputForm = document.querySelector("#inputTown");
inputForm.addEventListener("submit", fun)
const buttonFind = document.querySelector("#buttonSearch")
buttonFind.addEventListener("click", fun)
const townNow = document.querySelector("#townLeft");
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f'; //(этот ключ имеет ограничение в кол-ве запросов, если будут ошибки - придется сгенерировать новый или спросить в чате)
let tempNow = document.querySelector("#tempLeft")
const weatherImg = document.querySelector('#cloudImg')

function render(main, weather, name){
    let temp = Math.floor(main.temp);
    let iconId = weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`
    tempNow.innerHTML = temp + '&#176';
    townNow.textContent = name;
    console.log(tempNow)
}



async function fun(e){
    
    const input = document.querySelector("#inputMain").value;
    const name = `${input}`;
    const url = `${serverUrl}?q=${name}&appid=${apiKey}&units=metric`;
    console.log(url)

    e.preventDefault();
    let response = await fetch(url);
    if(response.ok){
        
        let json = await response.json();
        render(json.main, json.weather, name)
        
        
        
    }else{
        alert("Error: "+ response.status)
    }
}

