function calc(operation = resultAll, a, b) {
    if (typeof (a) != 'number' || typeof (b) != 'number') {
        return 'Указано не число';
    }
    let result;
    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "multi":
            result = a * b;
            break;
        case "substract":
            return a - b;
            break;
        default:
            result = resultAll;
    }
    return result;
}
const resultAdd = calc("add", 1, 2);
console.log(resultAdd);
const resultMulti = calc("multi", 1, 2);
console.log(resultMulti);
const resultSubstract = calc("substract", 1, 2);
console.log(resultSubstract);
const resultAll = resultAdd + resultMulti + resultSubstract;
console.log(resultAll);
const resultany = calc();
console.log("Сумма доступных действий равна = " + resultany);