const now__temp = document.querySelector('#now__temp');
const now__img = document.querySelector('#now__img');
const now__city = document.querySelector('#now__city');
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '4ffd32aaf968b4c03c60829ec4d46eb1';

export {now__temp, now__img, now__city, tabsBtn, tabsItems, serverUrl, apiKey};