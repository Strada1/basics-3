import Render from "./Render.js";


function LocalStorageDelete(event) {
    if (!event.target.classList.contains('delBtn')) return
    localStorage.removeItem(event.target.dataset.key)
    
    Render()
}

export default LocalStorageDelete;