import {btnEquals} from './vars.js';
import {Calc} from './calc.js';
import {CalculationResults} from './calc-result.js';

btnEquals.addEventListener('click', function () {
    Calc();
    CalculationResults();
});