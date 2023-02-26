const equalButton = document.getElementById("equalButton")
const newCalculatedNumber =
  document.getElementById("calculatedNumber").innerHTML

function newNumber() {
  document.getElementById("calculatedNumber").innerHTML = "25"
}

equalButton.addEventListener("click", newNumber)
