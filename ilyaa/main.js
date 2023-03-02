
let one = document.getElementById('num1');
let two = document.getElementById('num2');
let a = one.value;
let b = two.value;
let operator = document.getElementById('operator');
let result = document.getElementById('result');
let submit = document.getElementById('submit');


import { calculate } from "./func";

submit.addEventListener('click', calculate);