let a = Number(prompt("Введите первое число"));
let b = Number(prompt("Введите первое число"));

let operation = prompt("Введите операцию:(*,-,+)")

calc = (operation, a, b) => {
    if (operation === "+") {
        return (a) + (b);
    }
    else if (operation === "-"){
    return (a) - (b);
}
else if (operation === "*") {
    return (a) * (b);
}
}
alert (calc (operation, a, b))

