import {removeDiv, outpt} from './simplecalc.js';

export function createDiv(data) {
  const newDiv = document.createElement('div');
  newDiv.textContent = data;
  newDiv.className = 'removable';
  const newSpan = document.querySelector('#output');
  newSpan.insertBefore(newDiv, outpt);
  newDiv.addEventListener('click', function (e) {
    e.stopPropagation();
    removeDiv(newDiv);
  });
};