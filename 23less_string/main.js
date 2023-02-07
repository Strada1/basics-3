//Напишите функцию которая преобразует полученную строку в "вертикальный вид" и выводит ее в консоль.
//Если строка начинается с буквы s - нужно вывести эту строку с первой заглавной буквой
//Если строка больше 7 символов - вывести только первые 7
function showVerticalMessage(str){
    if (str[0] === 's'){ //изменить проверку на букву s
        console.log(str[0].toUpperCase());
        for (let i = 1; i < 7; i++) {
            console.log(str[i]);
        }
    }  else {
        for (let i = 0; i < 7; i++) {
            console.log(str[i]);
        }
    }
}

showVerticalMessage("stradagjjh");
