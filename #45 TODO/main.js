import LocalStorageAdd from './modules/LocalStorageAdd.js';
import Render from './modules/Render.js';
import LocalStorageDelete from './modules/LocalStorageDelete.js'

// Слушатель собыитя "DOMContentLoaded". Отрисовывает все элементы после загрузки страницы
document.addEventListener('DOMContentLoaded', Render);

// Слушатель события "submit". Добавляет новую запись в localStorage
document.addEventListener('submit', (event) => {
    LocalStorageAdd(event);
    Render();
});

// Слушатель собыитя "click". Удаляет элемент при нажатии на кнопку
document.addEventListener('click', (event) => {
    LocalStorageDelete(event);
    Render()
});