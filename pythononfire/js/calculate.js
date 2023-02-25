function calculate(leftInputValue, rightInputValue, operatorValue) {
    switch(operatorValue) {
        case '+':
        return leftInputValue + rightInputValue;
        case '-':
        return leftInputValue - rightInputValue;
        case '*':
        return leftInputValue * rightInputValue;
        case '/':
        return leftInputValue / rightInputValue;
    }
}

export default calculate;