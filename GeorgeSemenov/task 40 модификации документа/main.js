let cButton = document.getElementById("calcualteButton");

cButton.addEventListener("click",()=>{
  //вычисление
  let leftOperand = +document.getElementById("left_operand").value;
  let rightOperand = +document.getElementById("right_operand").value;
  let operation = document.getElementById("operation").value;
  let result = document.getElementById("result");
  switch(operation){
  case 'plus':
    result.textContent = leftOperand + rightOperand;
    break
  case 'minus':
    result.textContent = leftOperand - rightOperand;
    break
  case 'multiple':
    result.textContent = leftOperand * rightOperand;
    break
  case 'division':
    result.textContent = leftOperand / rightOperand;
    break
  }

})