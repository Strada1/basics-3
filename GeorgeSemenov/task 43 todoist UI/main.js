import {Calculation} from './calculation.js';
import {ShowResults} from './showResults.js';
import {g} from './globals.js';

let cButton = document.getElementById("calcualteButton");

cButton.addEventListener("click",()=>{
  g.result = document.getElementById("result");
  
  //отображение и добавление старого результата
  ShowResults();

  //вычисление
  g.result.textContent = Calculation();
})