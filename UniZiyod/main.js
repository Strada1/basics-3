// #23 Строки
/*
Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.
Если строка начинается с буквы s - нужно вывести эту строку с первой заглавной буквой
Если строка больше 7 символов - вывести только первые 7
*/

// ВЫПОЛНЕНИЕ ЗАДАНИЯ
let anyStr = 'semznakov';

function showVerticalMessage(anyStr) {
    if (anyStr.length > 7) {
        console.log(anyStr[0].toUpperCase()); // Увеличиваем первый символ (превращает в большую букву)
        for (let showWords of anyStr.slice(1, 7)) { // Отрезает лишние символы, если в слове больше 7 знаков
            console.log(showWords);
        }
    } else {
        console.log(anyStr[0].toUpperCase());
        for (let showWords of anyStr.slice(1)) { // Если в слове меньше 7 знаков — выводит без всяких "отрезаний"
            console.log(showWords);
        }
    }

}
showVerticalMessage(anyStr)