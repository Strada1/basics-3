// Константы для переключения табов
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

// Константа инпута поиска
const search_input = document.querySelector('.search_input');

// Константы для таба now
const now__temp = document.querySelector('#now__temp');
const now__img = document.querySelector('#now__img');
const now__city = document.querySelector('#now__city');

// Константы для таба details
const details__city = document.querySelector('#details__city');
const details__temp = document.querySelector('#details__temp');
const details__feeltemp = document.querySelector('#details__feeltemp');
const details__weather = document.querySelector('#details__weather');
const details__sunrise = document.querySelector('#details__sunrise');
const details__sunset = document.querySelector('#details__sunset');
const details__windspeed = document.querySelector('#details__windspeed');


const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '4ffd32aaf968b4c03c60829ec4d46eb1';

export {
    now__temp, now__img, now__city, tabsBtn,
    tabsItems, serverUrl, apiKey, search_input,
    details__city, details__temp, details__feeltemp,
    details__weather, details__sunrise, details__sunset, 
    details__windspeed
};