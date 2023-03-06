import {g} from './globals.js';

export function ShowResults(){
  let resultsContainer = document.getElementById("results-container");
  let lastResult = document.querySelector('#results-container>div');
  if(g.result.textContent){
    let oldResult = document.createElement("div");
    oldResult.innerHTML = g.result.textContent;
    resultsContainer.insertBefore(oldResult,lastResult);
  }
}