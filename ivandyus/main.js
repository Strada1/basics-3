let operation = prompt('Введите add, multi или subtract', '');
let a = +prompt('Введите число 1', '');
let b = +prompt('Введите число 2', '');

if (isNaN(a) || isNaN(b)) {
    alert('Введите число!');
} else {
    switch (operation) {
        case 'add':
            alert(a + b);
            break;
        case 'multi':
            alert(a * b);
            break;
        case 'subtract':
            alert(a - b);
            break;
        default:
            alert('Вы ввели неверное значение');
    };
};
