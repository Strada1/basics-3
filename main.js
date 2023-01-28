//Функция проверки возраста if else

function checkAge(age) {
  if (age <= 18) {
    console.log("you are not allowed");
  } else {
    console.log("you are welcome!");
  }
}

checkAge(17);

//Функция проверки возраста тернарный оператор

function checkAge(age) {
  age <= 18
    ? console.log("you are not allowed")
    : console.log("you are welcome!");
}

checkAge(19);

//Функция калькулятор

function calc(operation, a, b) {
  if (operation === "add") {
    return a + b;
  } else if (operation === "multi") {
    return a * b;
  } else if (operation === "subtract") {
    return a - b;
  } else {
    console.log("Check the numbers");
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));

//Функция калькулятор

function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
    case "multi":
      return a * b;
    case "subtract":
      return a - b;
  }
}

console.log(calc("add", 1, 2));
console.log(calc("multi", 1, 2));
console.log(calc("subtract", 3, 2));
calc();
