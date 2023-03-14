export {render};



function render(main, weather, name){
    let temp = Math.floor(main.temp);
    let iconId = weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`
    tempNow.innerHTML = temp + '&#176';
    townNow.textContent = name;
    console.log(tempNow)
}