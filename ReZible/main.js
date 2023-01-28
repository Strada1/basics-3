let firstNumber = Number(prompt('Введите первое число'));
if(firstNumber === Number('')){
    alert("Вы не ввели первое число, попробуйте снова");
}
else if(isNaN(firstNumber)){
    alert("Вы ввели некорректное значение для первого числа, попробуйте снова");
}
else{
    let secondNumber = Number(prompt('Введите второе число'));
    if(secondNumber === Number('')){
        alert("Вы не ввели второе число, попробуйте снова");
    }
    else if(isNaN(secondNumber)){
        alert("Вы ввели некорректное значения для второго числа, попробуйте снова");
    }
    else
    {
        let selectedOperation = prompt("Выберите операцию: add/+, subtract/-, multi/*")
        let doOperation = (selectedOperation === null || selectedOperation === "") ? "Вы не выбрали операцию":
        (selectedOperation !== "add" &&
        selectedOperation !== "+" &&
        selectedOperation !== "subtract" &&
        selectedOperation !== "-" &&
        selectedOperation !== "multi" &&
        selectedOperation !== "*") ? "Вы ввели некорректную операцию" :
        calc(firstNumber,secondNumber,selectedOperation);
        alert(doOperation);
    }
}

function calc(a,b,operation){
    switch(operation){
        case 'add':
        case '+':
            const add = a+b;
            return add; 
        case "subtract":
        case "-":
            const subtract =a-b;
            return subtract;
        case "multi":
        case "*":
            const multi = a*b;
        return multi;
            
    }
}