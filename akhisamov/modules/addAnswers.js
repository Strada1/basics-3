import {elements} from "./elements.js";

export function addAnswers (item) {
    const newDiv = document.createElement('div');
    newDiv.textContent = item;
    elements.result_div.append(newDiv);
}