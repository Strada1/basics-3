//! BOM - browser object model. alert/prompt/confirm - часть BOM

// Внутренная высота браузера
console.log(window.innerHeight);

// Установить цвет страницы на красный
document.body.style.background = 'red';

// Запустить таймер и выключить красный цвет через 1000 мс
setTimeout(() => (document.body.style.background = ''), 1000);

// Вывод ссылки на текущую страницу
console.log(location.href);

// Функция перехода на Википедию
function goWikipedia() {
  location.href = 'https://en.wikipedia.org/';
}

// Функция перезагрузки страницы
function pageReload() {
  location.reload();
}
