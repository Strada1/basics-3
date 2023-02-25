import {elements} from "./elements.js";

export function deleteAnswer (event) {
    elements.result_div.removeChild(event.target);
}