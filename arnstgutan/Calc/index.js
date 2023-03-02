const operator = document.querySelector(".operator");
const operand = document.querySelectorAll(".operand");
let operand1, operand2;

function operatorClick() {
  if (operator.classList.contains("active")) {
    operator.classList.remove("active");
  } else {
    operator.classList.add("active");
  }
}

function removeActive(e) {
  if (e.target !== operator) {
    operator.classList.remove("active");
  }
}

console.log(operand);
operator.addEventListener("click", operatorClick);
window.addEventListener("click", removeActive);
window.addEventListener("click", calculate);
