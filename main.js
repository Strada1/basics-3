const equalButton = document.getElementById("equalButton")
const newCalculatedNumber =
  document.getElementById("calculatedNumber").textContent

function newNumber() {
  document.getElementById("calculatedNumber").textContent = "25"
}

equalButton.addEventListener("click", newNumber)
console.log(newCalculatedNumber)
