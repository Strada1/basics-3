import { calculator } from "./calculator.js";
import { deleteResult } from "./deleteResult.js";
export const resultBtn = document.getElementById("resultBtn");
export const results = document.querySelector(".results");


results.addEventListener("click", deleteResult);
resultBtn.addEventListener("click", calculator);
