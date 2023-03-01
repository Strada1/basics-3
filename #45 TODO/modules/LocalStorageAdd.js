import Render from "./Render.js";

function LocalStorageAdd(event) {
    
    event.preventDefault();

    let obj = event.target[0];

    if (obj.value === '') return

    localStorage.setItem(
        Date.now(),
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