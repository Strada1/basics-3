import { result, resultElement  as currentResult } from './calculate.js';

const resultsAreaElement = document.querySelector('[data-results-area]');

const createResultElement = (tag, className) => {
    const resultElement = document.createElement(tag);
    resultElement.classList.add(className);
    return resultElement;
}

const resultElement = createResultElement('div', 'calculator__result-item');

const showResultElementsHandler = () => {
    const currentResultElement = resultElement.cloneNode(true);
    currentResultElement.textContent = isNaN(result)? '-': currentResult.innerText;
    resultsAreaElement.append(currentResultElement);
}


const removeResultElementsHandler = (evt) => {
    if (evt.target.closest('.calculator__result-item')) {
        evt.target.remove();
    }
}

export {
    resultsAreaElement,
    showResultElementsHandler,
    removeResultElementsHandler
}