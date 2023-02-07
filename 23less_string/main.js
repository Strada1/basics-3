//Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.
//Если строка начинается с буквы s - нужно вывести эту строку с первой заглавной буквой
//Если строка больше 7 символов - вывести только первые 7
const maxLengthStr = 7;
function showVerticalMessage(str){
    let newStr = '';
    if (str[0] === 's'){ //изменить проверку на букву s
        newStr = `${str[0].toUpperCase()}\n`;
        for (let i = 1; i < maxLengthStr; i++) {
            newStr += `${str[i]}\n`;
        }
    }  else {
        for (let i = 0; i < maxLengthStr; i++) {
            newStr += `${str[i]}\n`;
        }
    }
    console.log(newStr);
}

showVerticalMessage("stradagjjh");
