export function Calculation(){
  let operation = document.getElementById("operation").value;
  let leftOperand = +document.getElementById("left_operand").value;
  let rightOperand = +document.getElementById("right_operand").value;
  switch(operation){
  case 'plus':
    return leftOperand + rightOperand;
  case 'minus':
    return leftOperand - rightOperand;
  case 'multiple':
    return leftOperand * rightOperand;
  case 'division':
    return leftOperand / rightOperand;
  }
}