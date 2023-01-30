

// РЕШЕНИЕ:

let startNum;
let endNum;
let currentNum;
let i;

startNum = +prompt('Введите число с которого хотите начать поиск простых чисел:', '');
endNum = +prompt('Введите последнее число:', '');

next:
for (currentNum = startNum; currentNum <= endNum; currentNum++) {

  for (i = 2; i <= Math.pow(currentNum, 1 / 2); i++) {
  if (currentNum % i == 0) {
  continue next;
}
}
alert(currentNum);
}