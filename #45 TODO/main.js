import Render from './modules/Render.js';
import LocalStorageAdd from './modules/LocalStorageAdd.js';
import LocalStorageDelete from './modules/LocalStorageDelete.js'
import LocalStorageChange from './modules/LocalStorageChange.js'

// Слушатель собыитя "DOMContentLoaded". Отрисовывает все элементы после загрузки страницы
document.addEventListener('DOMContentLoaded', Render);

// Слушатель события "submit". Добавляет новую запись в localStorage
document.addEventListener('submit', (event) => {
    LocalStorageAdd(event);
});

// Слушатель собыитя "click". Удаляет элемент при нажатии на кнопку
document.addEventListener('click', (event) => {
    LocalStorageDelete(event);
    LocalStorageChange(event);
});
