var equal = document.getElementById('equal')
var add = document.getElementById("add").textContent;
var subtract = document.getElementById("subtract").textContent;
var multi = document.getElementById("multi").textContent;
var divide = document.getElementById("divide").textContent;
var answer = document.getElementById("Answer");

function calc(){
    
    var operation = document.getElementById("operations");
    var value = operation.options[operation.selectedIndex].value
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    if (value===add){
        console.log(a+b);
        answer.textContent = `${a+b}`;
        
    }else if (value===multi){
        console.log(a*b);
        answer.textContent = `${a*b}`
    }else if (value===subtract){
        console.log(a-b);
        answer.textContent = `${a-b}`
    }else if (value===divide){
        console.log(a/b);
        answer.textContent = `${a/b}`
    }else{
        console.log("smth went wrng...");
    }
      }

equal.addEventListener('click', calc)