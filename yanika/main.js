"use strict"
//Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль
function showVerticalMessage(anyWord) {
    //Если строка начинается с буквы s - нужно вывести эту строку с первой заглавной буквой
    //Если строка больше 7 символов - вывести только первые 7
    console.log(anyWord.charAt(0).toUpperCase())
    for (let lol of anyWord.slice(1, 7)) {
        console.log(lol)
    }
}
showVerticalMessage("st rada");
