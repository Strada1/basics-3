let button = document.getElementById("result");

function result(firstVal, secondVal, operand) {
    switch(operand) {
        case "+":
            return +firstVal + +secondVal;
        case "-":
            return +firstVal - +secondVal;
        case "*":
            return +firstVal * +secondVal;
        case "/":
            return +firstVal / +secondVal;
    }
}

button.addEventListener("click", function () {
    let firstVal = document.getElementById("firstVal").value;
    let secondVal = document.getElementById("secondVal").value;
    let operand = document.getElementById("action").value;

    document.getElementById("sum").innerHTML = result(firstVal, secondVal, operand);
})