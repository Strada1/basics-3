var op; 

function Calc() {
    var result;

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    function isNum(num){
        return !isNaN(num);
    };

    switch (op) {
        case '+': 
        if (isNum(num1)==true && isNum(num2)==true){
            result = num1 + num2;
        } else {
            result = 'Введите число';
        }
        break;

        case '-':
            if (isNum(num1)==true && isNum(num2)==true){
                result = num1 - num2;
            } else {
                result = 'Введите число';
            }
        break;

        case '*':
            if (isNum(num1)==true && isNum(num2)==true){
                result = num1 * num2;
            } else {
                result = 'Введите число';
            }
        break;

        case '/':
            if (isNum(num1)==true && isNum(num2)==true){
                if (num2 == 0) {
                    result = 'Нельзя делить';
                } else {
                    result = num1 / num2;
                }
            } else {
                result = 'Введите число';
            }
           
        break;
    };

    document.getElementById("result").innerHTML = result;
};