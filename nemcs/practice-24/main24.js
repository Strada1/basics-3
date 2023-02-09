let allTask = ['Практика 1', 'Практика 2', 'Практика 3', 'Практика 4', 'Практика 5'];

allTask[2] = 'Practice 3'; // Заменили элемент
allTask.push('Практика 6'); // Добавили еще одну задачу в конец массива Практика 6
allTask.pop(); // Удалили последний элемент Практика 6
allTask.shift(); // Удалили первый элемент
allTask.unshift('Practice 1'); // Добавили первый элемент Practice 1

let methodSlice = allTask.slice(2, 4); // Создали новый массив 3-4 slice
console.log(methodSlice);
let allTaskDelete = allTask.splice(1, 1); // Удалили Практика 2 из массива
allTask.splice(5, 0, 'Практика 6'); // Добавили в конец массива Практика 6

console.log(allTask.length); // Количество элементов в массиве
console.log(allTask[0]); // Доступ к элементу
console.log(allTask);

console.log('Текущие активные задачи: ');
for (const task of allTask) {
    console.log(task);
}

console.log('Данные задачи были удалены: ' + allTaskDelete);

