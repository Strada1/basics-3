const opers = {
  sum: "plus",
  min: "minus",
  mul: "multiply",
  div: "division",
};
var button = document.getElementById('rovno');
  const typeOfOperator = document.querySelector(".select-section");

function calc (){
  var a = document.getElementsByTagName('input')[0].value;
    var b = document.getElementsByTagName('input')[1].value;
  switch (typeOfOperator.value) {
    case opers.sum:
      document.getElementById("ans").innerHTML = (
        +a + +b
      ).toFixed(1);
      break;
    case opers.min:
      document.getElementById("ans").innerHTML = (
        a - b
      ).toFixed(1);
      break;
    case opers.mul:
      document.getElementById("ans").innerHTML = (
        a * b
      ).toFixed(1);
      break;
    case opers.div:
      document.getElementById("ans").innerHTML = (
        a / b
      ).toFixed(1);
      break;
  }
}
button.addEventListener('click', calc);
