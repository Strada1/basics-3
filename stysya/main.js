var equal = document.getElementById("equal");
var add = document.getElementById("add").textContent;
var subtract = document.getElementById("subtract").textContent;
var multi = document.getElementById("multi").textContent;
var divide = document.getElementById("divide").textContent;
var answer = document.getElementById("Answer");

function calc() {
  var operation = document.getElementById("operations");
  var value = operation.options[operation.selectedIndex].textContent;
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  if (
    isFinite(document.getElementById("a").value) !== true ||
    isFinite(document.getElementById("b").value) !== true
  ) {
    answer.textContent = "Вводимые данные должны быть числами!";
  } else {
    if (value === add) {
      console.log(a + b);
      answer.textContent = `${(a + b).toFixed(3)}`;
    } else if (value === multi) {
      console.log(a * b);
      answer.textContent = `${(a * b).toFixed(3)}`;
    } else if (value === subtract) {
      console.log(a - b);
      answer.textContent = `${(a - b).toFixed(3)}`;
    } else if (value === divide) {
      if (b === 0) {
        answer.textContent = "На ноль делить нельзя!";
      } else {
        console.log(a / b);
        answer.textContent = `${(a / b).toFixed(3)}`;
      }
    } else {
      console.log("smth went wrng...");
    }
  }
}

equal.addEventListener("click", calc);
