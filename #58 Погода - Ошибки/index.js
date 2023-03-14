import onTabClick from './src/modules/onTabClick.js';
import searchFetch from './src/modules/searchFetch.js';


// Слушатель для переключения табов по клику -- modules/onTabClick
const tabsNav = document.querySelector(".tabs__nav");
tabsNav.addEventListener('click', onTabClick);

// Слушатель формы для запроса города из строки поиска -- modules/searchFetch
const searchForm = document.querySelector('.search_form');
searchForm.addEventListener('submit', searchFetch)

// TODO: Добавить слушатель формы на событие 'DOMContentLoaded':
// При загрузке страницы брать текущий город из localStorage
// И отображать информацию по нему