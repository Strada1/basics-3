var add = document.getElementById('add').textContent;
var subtract = document.getElementById('subtract').textContent;
var multi = document.getElementById('multi').textContent;
var divide = document.getElementById('divide').textContent;

var equals = document.getElementById('equals');
var result = document.getElementById('result');


function calc() {
    var operation = document.getElementById('operation');
    var value = operation.options[operation.selectedIndex].value;
    const a = Number(document.getElementById('number1').value);
    const b = Number(document.getElementById('number2').value);
    
    function add_div() {
        const newDiv = document.createElement('div');
        newDiv.textContent = result.textContent;
        document.body.appendChild(newDiv);

        newDiv.addEventListener('click', remove);

        function remove() {
            // const element = document.querySelector('div');
            newDiv.remove();
        }
    }

    if (value === add) {
        result.textContent = a + b;
    }
    else if (value === subtract) {
        result.textContent = a - b;
    }
    else if (value === multi) {
        result.textContent = a * b;
    }
    else if (value === divide) {
        result.textContent = a / b;
    }
    add_div();
}

equals.addEventListener('click', calc);

