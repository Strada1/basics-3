import { calc,calcResult } from "./calc.js";

const calcButton = document.querySelector('.calc__nums');
let content = document.querySelector('.calculate__content');

calcButton.addEventListener('click', function() {
  calc();

  const resultContainer = document.createElement('div');
  resultContainer.classList.add('.result');
  content.appendChild(resultContainer)
  resultContainer.textContent = calcResult.textContent;

  if(resultContainer) {
    resultContainer.addEventListener('click', (evt) => {
      evt.target.remove();
    })
  }
})
