// #23 Строки
/*
Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.
Если строка начинается с буквы s - нужно вывести эту строку с первой заглавной буквой
Если строка больше 7 символов - вывести только первые 7
*/

let anyStr = 'semznakov';

function showVerticalMessage(anyStr) {
    if (anyStr.length > 7) {
        console.log(anyStr[0].toUpperCase());
        for (let showWords of anyStr.slice(1, 7)) {
            console.log(showWords);
        }
    } else {
        console.log(anyStr[0].toUpperCase());
        for (let showWords of anyStr.slice(1)) {
            console.log(showWords);
        }
    }

}
showVerticalMessage(anyStr)