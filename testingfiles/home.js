//! home work in Strada

const TodoList = [];

TodoList.push('Поесть пельмени', 'Надеть штаны', 'Поиграть в мячик ');
TodoList.splice(1, 0, 'Изучить Античную философию')
let deleteElement = TodoList.pop(); // Поиграть в мячик
TodoList.shift();
TodoList.unshift('Я первый');


alert(TodoList); // Что это ))) 

alert(deleteElement); // Удаленный элемент
alert(TodoList.length); // длина
alert(TodoList[0]);// вывод последнего элемента
alert(TodoList[TodoList.length - 1]); // вывод последнего элемента