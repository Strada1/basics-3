import Render from "./Render.js";
import {getUniqueID} from './functions.js'

function LocalStorageAdd(event) {
    
    event.preventDefault();

    let obj = event.target[0];

    if (!obj.value.trim().length) return

    localStorage.setItem(
        getUniqueID(),
        JSON.stringify({
            priority: obj.dataset.priority,
            text: obj.value,
            isDone: false
        })
    )

    obj.value = '';

    Render()
}

export default LocalStorageAdd