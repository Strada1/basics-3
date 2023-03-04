const tasksContainer = document.querySelectorAll('.tasksContainer');

function Render() {
    
    try {
        tasksContainer.forEach(container => {
            container.querySelectorAll('*').forEach(n => n.remove());
        });
    } catch {
        console.log('Ошибка при удалении всех элементов внутри tasksContainer')
    }
    


    try {
        Object.entries(localStorage).forEach(([key, value]) => {
            value = JSON.parse(value);
            let { priority, text, isDone } = value;

            if (!priority) {
                throw new Error('priority')
            }
            if (!text) {
                throw new Error('text')
            }

            append(key, priority, text, isDone)
        })
        console.log('Прозошла отрисовка')
        
    } catch(error) {
        console.log(`Возникла ошибка при отрисовке - > ${error.message}`)
    }
}

function append(key, priority, text, isDone) {
    
    let isChecked
    isDone ? isChecked = 'checked' : isChecked = '';

    try {
        if (!tasksContainer[priority]) {
            throw new Error('Произошла ошибка при вставлении нового узла в tasksContainer')
        }

        tasksContainer[priority].insertAdjacentHTML(
            `afterbegin`,
            `<div class='taskWrapper' data-isDone=${isDone}>
                <input type="radio" class="checkboxTask" data-key=${key} ${isChecked}>
                <div class="taskText">${text}</div>
                <button class="btnTask delBtn" data-key=${key}><span class="material-symbols-outlined delBtn" data-key=${key}>
                    close
                </span></button>
            </div>`
        )
    } catch (error) {
        console.log(error.message);
    }


}

export default Render