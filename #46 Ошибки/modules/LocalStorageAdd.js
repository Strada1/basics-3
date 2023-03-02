import Render from "./Render.js";
import {getUniqueID} from './functions.js'

function LocalStorageAdd(event) {
    event.preventDefault();

    let obj = event.target[0];
    
    
    try {
        
        if (!obj.dataset.priority) {
            throw new Error('Ошибка: form->input (data-priority)')
        }
        if (!obj.value) {
            throw new Error('Ошибка: form->input (value)')
        }

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

    } catch (error) {
        console.log(error.message)
    } finally {
        Render()
    }

}

export default LocalStorageAdd