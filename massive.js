// for(task in newArray){
//     console.log(task);
// }

let newArray = ['Проснуться', "Потянуться", "Сесть за курс"];
let push = newArray.push("Выпить воды");
console.log(newArray, push,"\n"); // [ 'Проснуться', 'Потянуться', 'Сесть за курс', 'Выпить воды' ] 4
let pop = newArray.pop();
console.log(newArray,"\n",pop,"\n"); // Удаление последнего элемента массива - [ 'Проснуться', 'Потянуться', 'Сесть за курс' ] Выпить воды 
let firsttask = newArray.shift();
console.log(newArray);
console.log(firsttask,"\n"); //Удаление первого элемента массива - [ 'Потянуться', 'Сесть за курс' ] Проснуться
let firstadd = newArray.unshift("Сделать завтрак");
console.log(newArray, firstadd,"\n"); //Добавление первого элемента - [ 'Сделать завтрак', 'Потянуться', 'Сесть за курс' ] 3 
let firsttwoTasks = newArray.slice(-1);
console.log(firsttwoTasks,"\n"); // [ 'Сесть за курс' ] 
let dell = newArray.splice(1);
console.log(newArray); // Удаление первого элемента - [ 'Сделать завтрак' ] [ 'Потянуться', 'Сесть за курс' ]

for(task in newArray) {
    console.log(task);
}