import { results } from "./main.js";

export const deleteResult = function (event) {
    results.removeChild(event.target);
}


