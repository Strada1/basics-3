import {Calc} from './calc.js';

export function CalculationResults() {
    const newDiv = document.createElement('div');
    newDiv.className = 'old-result';
    newDiv.textContent = Calc();
    document.body.appendChild(newDiv);
    newDiv.addEventListener('click', () => newDiv.remove());
}