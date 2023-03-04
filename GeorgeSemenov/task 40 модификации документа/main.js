let cButton = document.getElementById("calcualteButton");

cButton.addEventListener("click",()=>{
  let leftOperand = +document.getElementById("left_operand").value;
  let rightOperand = +document.getElementById("right_operand").value;
  let operation = document.getElementById("operation").value;
  let result = document.getElementById("result");
  let resultsContainer = document.getElementById("results-container");
  let lastResult = document.querySelector('#results-container>div');

  //отображение и добавление старого результата
  if(result.textContent){
    let oldResult = document.createElement("div");
    oldResult.innerHTML = result.textContent;
    resultsContainer.insertBefore(oldResult,lastResult);
  }

  //вычисление
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