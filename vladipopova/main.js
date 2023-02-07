// 5.	Создайте простую функцию калькулятор с именем сalc()
// С тремя параметрами a и b, а также operation
// Вызов сalc(‘add’, 1, 2) - возвращает 3
// Вызов сalc(‘multi’, 1, 2) - возвращает 2
// Вызов сalc(’subtract’, 3, 2) - возвращает 1


function calc(operation, a, b) {
    if (operation == "add") {
        return (a + b);
    }
    else if (operation == "multi") {
        return (a * b);
    }
    else {
        return (a - b);
    }
}

let m = calc("bhiiigy", 12, 6)
console.log(m)