// createElement - создать новый <div>
const newDiv = document.createElement('div');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const referenceElement = document.querySelector('#reference-element');
const newChild = document.createElement('div');
// Установим текстовый контент
newDiv.textContent = 'Это div из JS!';
newChild.textContent = 'Мною заменят дочерний элемент!';
// Добавим стиль
newDiv.style.color = 'orange';
newChild.style.color = 'green';

// Вставим элемент в тело документа с помощью appendChild
document.body.appendChild(newDiv);

// appendChild(), если элемент уже есть, перенесет его на новое место
parent.appendChild(child); // Добавить child в parent
parent.appendChild(newChild);
// insertBefore() - добавляем элемент перед указанным элементом
parent.insertBefore(child, referenceElement);

// replaceChild() - заменять указанный элемент другим элементом
parent.replaceChild(newChild, child);

//! insertAdjacentHTML/Text/Element
// Insert -> HTML, Text, Elements!

parent.insertAdjacentHTML('beforeend', '<p>Я новый тег - p!</p>');
parent.insertAdjacentText(
  'beforeend',
  'Я - текст, добавленный в parent с помощью insertAdjacentText.'
);
const testAdjacentElement = document.createElement('div');
// Добавляем id с помощью setAttribute
testAdjacentElement.setAttribute('id', 'testAdjacentElement');
// Добавляем текст с помощью textContent
testAdjacentElement.textContent = 'Я добавлен с помощью insertAdjacentElement!';

parent.insertAdjacentElement('beforeend', testAdjacentElement);

//! Удаление и клонирование узлов (nodes)

// removeChild - удаление дочернего элемента
parent.removeChild(testAdjacentElement);

// remove - удаляет элемент из DOM
referenceElement.remove();

// cloneNode - клонирование элемента HTML
const clonedParent = parent.cloneNode(true) // true - копировать внутреннее содержимое
document.body.insertBefore(clonedParent, parent) // Добавить в начало body клон parent
