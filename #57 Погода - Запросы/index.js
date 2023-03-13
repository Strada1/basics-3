import onTabClick from './src/modules/onTabClick.js';
import searchFetch from './src/modules/searchFetch.js';


// Функция для переключения табов по клику -- modules/onTabClick
const tabsNav = document.querySelector(".tabs__nav");
tabsNav.addEventListener('click', onTabClick);

// Функция запроса города из строки поиска -- modules/searchFetch
const searchForm = document.querySelector('.search_form');
searchForm.addEventListener('submit', searchFetch)