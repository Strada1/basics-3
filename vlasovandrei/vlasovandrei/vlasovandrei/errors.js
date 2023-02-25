import { output } from "./main.js";
import { saveResult } from "./main.js";

const container = document.getElementById('container');
const calculator = document.getElementById('calculator');

export function ifError(a, b) {
    if (isNaN(a) || isNaN(b) || a === '' || b === '') {
        let timerId = setInterval(() => {
            calculator.classList.toggle("error");
            container.classList.toggle("container-error");
        }, 500)
        setTimeout(() => { clearInterval(timerId) }, 2000);
        output.textContent = 'error';
        saveResult()
        return true;
    }
}