import Render from "./Render.js";

function LocalStorageChange(event) {
    if (event.target.type !== 'radio') return;
    console.log(event.target.outerHTML)
    let key = event.target.dataset.key;
    let {priority, text, ...other} = JSON.parse(localStorage.getItem(key));

    localStorage.setItem(
        key,
        JSON.stringify({
            priority: priority,
            text: text,
            isDone: true
        })
    )
    Render()
}

export default LocalStorageChange;