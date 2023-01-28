function calc(operation = resultAll, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "substract":
            return a % b;
        default:
            return resultAll;
    }
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
console.log("вы не выбрали действие, выполним сложение всех действий = " + resultany);