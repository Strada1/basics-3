const a = document.getElementById('a');
const b = document.getElementById('b');
const operators = document.getElementById('operators');
const getSolutionButton = document.getElementById('getSolutionButton');
const solution = document.getElementById('solution');
import {calc} from './calc.js'

getSolutionButton.addEventListener('click', calc);
