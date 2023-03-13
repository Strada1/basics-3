
const form = document.querySelector('.search');
const city__name = document.getElementById('1');
const now__temp = document.querySelector('.now__temp');
const cityName = document.querySelector('.city__names')
const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'cd715ea280a3d7315b45d7f979f62239';


form.addEventListener("submit", (e) => {
     e.preventDefault(e);
      const url = `${serverUrl}?q=${e.target[0].value}&appid=${apiKey} `;
fetch(url)
.then((resp)=> {return resp.json()})
.then((data)=>{ 
   document.getElementById('1').textContent = data.name;
   document.querySelector('.now__temp').innerHTML = Math.round(data.main.temp- 273 )
   + `°`;
   document.querySelector('.obl').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
   document.querySelector('.Feels').innerHTML = `Feels like:` + Math.round(data.main.feels_like-273)
   document.querySelector('.Temperature').innerHTML = `Temperature:`+ Math.round(data.main.temp -273);
   document.querySelector('.Clouds').textContent = `Weather:`+ (data.weather[0].description);
   document.querySelector('.Sunrise').innerHTML = `Sunrise:`+ (data.sys.sunrise);
   document.querySelector('.Sunset').innerHTML = `Sunset:`+ (data.sys.sunset)
   new Date().getTime()/1000.0;
   console.log(data)
})
})
  


 //18:54
   //4:45

//form.addEventListener("submit", (e) => {
//   e.preventDefault(e);
//   console.log(apiKey);
//   const url = `${serverUrl}?q=${e.target[0].value}&appid=${apiKey}&units=metric`;
//   fetch(url)
//      .then((res) => res.json())
//      .then((data) => {
//         city__name.textContent = `${data.name}`;
//         now__temp.textContent = Math.round(`${data.main.temp}`) + `°`;
//      });
//});

//sys
//: 
//country
//: 
//"RU"
//sunrise
//: 
//1678744034
//sunset
//: 
//1678786066



//form.addEventListener("submit", (e)=> {
//e.preventDefault(e);
// const url = `${serverUrl}?q=${e.target[0].value}&appid=${apiKey}&units=metric`
// fetch(url)
// .then((resp)=> {return resp.json()})
// .then((data)=> {
//   document.getElementById('2').textContent = data.name;
//   document.querySelector('.Temperature')
//   document.querySelector('.Feels')
//   document.querySelector('.Clouds')
//   document.querySelector('.Sunrise')
//   document.querySelector('.Sunset')
   
//})
//})