// #23 Строки
/*
// # 1 Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
str = 'андрей';

function ucFirst() {
    if (str[0] === ' ') {
        return console.log(str[1].toUpperCase() + str.slice(2));
    } else {
        return console.log(str[0].toUpperCase() + str.slice(1));
    }
}
ucFirst(str);

// #2 Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false. Функция должна быть нечувствительна к регистру
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false


let anyComment = 'FREE xXX';

function checkSpam() {
    commentCheck = anyComment.toLowerCase()
    if (commentCheck === 'viagra' || commentCheck === 'free xxx') {
        console.log('Ваш комментарий распознан как СПАМ!');
    } else {
        console.log(`Ваш комментарий: ${anyComment} успешно опубликован`);
    }
}

checkSpam(anyComment)


// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

let anyCom = 'My name is Ziyod! This is my first';

function truncate(anyCom, maxLength) {
    if (anyCom.length > maxLength) {
        return console.log(anyCom.slice(0, maxLength) + '…');
    } else {
        return console.log(anyCom);
    }
}

truncate(anyCom, 25)
*/
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