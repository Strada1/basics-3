import { enterElement, enterElementHandler } from './calculate.js';
import { resultsAreaElement, showResultElementsHandler, removeResultElementsHandler } from './show-remove-results.js';

enterElement.addEventListener('click', enterElementHandler);
enterElement.addEventListener('click', showResultElementsHandler);
resultsAreaElement.addEventListener('click', removeResultElementsHandler);