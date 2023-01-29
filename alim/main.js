let admin = prompt("Ведите ваш статус");
switch (admin) {
  case "User":
    alert("Привет User");
    break;
  case "boss":
    alert("Приветствую вас boss");
    break;
    defuld: alert("Извините вам нельзя!");
}

let boss = prompt("Представьтесь?", "");
let messageEnd =
  boss == "Сотрудник"
    ? "Привет"
    : boss == "Директор"
    ? "Здраствуйте"
    : boss == " "
    ? "НЕТ логина"
    : " ";
alert(messageEnd);
// Kалькулятор
function calc(operation, a, b) {
  let add = +a + +b;
  let multi = a * b;
  let subtract = a - b;
  if (operation == "add") {
    alert(add);
  } else if (operation == "multi") {
    alert(multi);
  } else if (operation == "subtract") {
    alert(subtract);
  } else {
    alert("Sorri");
  }
}

let operation = prompt("add,multi,subtract", " ");
calc(operation, a, b);
// Браузер
let browser = prompt("Ведите браузер ваш");
if (browser === "Edge") {
  alert("You've got the Edge");
} else if (browser === "Chrome") {
  alert("Okai we support these browser too");
} else if (browser === "Firefox") {
  alert("Okai we support these browser too");
} else if (browser === "Safari") {
  alert("Okai we support these browser too");
} else if (browser === "Opera") {
  alert("Okai we support these browser too");
} else {
  alert("We hope that this page looks ok!");
}
// Switch
let number = +prompt("ВВедите число", " ");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("ВЫ ввели число 1");
    break;
  case 2:
  case 3:
    alert("ВЫ ввели число, 2 а может и 3");
    break;
}
