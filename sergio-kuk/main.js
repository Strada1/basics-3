// Ваша задача
// Создать массив из целых чисел и используя метод forEach, вывести их в консоль с текстовым сообщением Number is ${number}
console.log('------------- 1 -------------');
const arr = [1, 3, 5, 7, 9];
arr.forEach(item => console.log(`Number is ${item}`));

// Задача
//     дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion'].
//     найдите первое слово длиной больше 7 символов и выведите его в консоль

console.log('------------- 2 -------------');
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const animal = animals.find(item => item.length > 7);
console.log(animal);


// Задача
//     Дан массив чисел [1, 11, -2, 3, -10, 4].
//     Создайте новый массив только из отрицательных чисел
//     Выведите его в консоль

console.log('------------- 3 -------------');
const arr_num = [1, 11, -2, 3, -10, 4];
const arr_neg = arr_num.filter(num => num < 0);
arr_neg.forEach(item => console.log(item));
// console.log(arr_neg);

// const users = ['Ivan', 'Petr', 'Anna'];
// users.forEach(console.log);


// Задача
//    Дан массив чисел [1, 11, -2, 3, -10, 4].
//    Создайте новый массив из абсолютных значений элементов и выведите его в консоль.

console.log('------------- 4 -------------');
const arr_abs = arr_num.map(num => (num < 0 ? -num : num));
// arr_abs.forEach(item => console.log(item));
let str = '';
arr_abs.forEach(item => str += item + ', ');
console.log(arr_abs);
console.log(str.slice(0, str.length-2));


// Задача
//     Дан массив чисел [1, 11, -2, 3, -10, 4].
//     Отсортируйте массив по убыванию и выведите его в консоль.

console.log('------------- 5 -------------');
const arr_sorted = [...arr_num];
// const arr_sorted = arr_num.concat(arr_num);
// const arr_sorted = arr_num;
arr_sorted.sort((a,b) => b-a);
console.log(arr_num);
console.log(arr_sorted);

