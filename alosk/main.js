var button = document.getElementById('calc');
function calcRes() {
    let a = document.getElementById('value1').value;
    let b = document.getElementById('value2').value;
    let c = document.getElementById('value3').value;
    let newDiv = null;
    const deleteSelf = (nDiv) => {
        if (nDiv.which === 1) {
            nDiv.target.remove();
        }
    };
    switch(c) {
        case '+':
            document.getElementById('res').innerHTML = parseInt(a) + parseInt(b);
            newDiv = document.createElement('div');
            newDiv.textContent = parseInt(a) + parseInt(b);
            document.body.appendChild(newDiv);
            newDiv.addEventListener('mousedown', deleteSelf);
            break;
        case '-':
            document.getElementById('res').innerHTML = parseInt(a) - parseInt(b);
            newDiv = document.createElement('div');
            newDiv.textContent = parseInt(a) - parseInt(b);
            document.body.appendChild(newDiv);
            newDiv.addEventListener('mousedown', deleteSelf);
            break;
        case '*':
            document.getElementById('res').innerHTML = parseInt(a) * parseInt(b);
            newDiv = document.createElement('div');
            newDiv.textContent = parseInt(a) *  parseInt(b);
            document.body.appendChild(newDiv);
            newDiv.addEventListener('mousedown', deleteSelf);
            break;
        case '/':
            if (parseInt(b) === 0) {
                alert('Неверное условие!');
                return 0;
            } else {
                document.getElementById('res').innerHTML = parseInt(a) / parseInt(b);
                newDiv = document.createElement('div');
                newDiv.textContent = parseInt(a) / parseInt(b);
                document.body.appendChild(newDiv);
                newDiv.addEventListener('mousedown', deleteSelf);
            }
            break;
    }
}
button.addEventListener('click', calcRes);