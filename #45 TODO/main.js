import LocalStorageAdd from './modules/LocalStorageAdd.js';
import Render from './modules/Render.js';
import LocalStorageDelete from './modules/LocalStorageDelete.js'


// Слушатель собыитя "DOMContentLoaded". Отрисовывает все элементы после загрузки страницы
document.addEventListener('DOMContentLoaded', Render);

// Слушатель события "submit". Добавляет новую запись в localStorage
document.addEventListener('submit', (event) => {
    LocalStorageAdd(event);
});

// Слушатель собыитя "click". Удаляет элемент при нажатии на кнопку
// document.addEventListener('click', (event) => {
//     LocalStorageDelete(event);
// });

const delbtns = document.querySelectorAll('.btnTask')
delbtns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        LocalStorageDelete(event)
    })
})


// document.addEventListener('click', () => {
//     console.log(document.body.innerHTML)
// })
