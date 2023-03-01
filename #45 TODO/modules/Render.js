const tasksContainer = document.querySelectorAll('.tasksContainer');

function Render() {
    tasksContainer.forEach(container => {
        container.querySelectorAll('*').forEach(n => n.remove());
    });
    
    Object.entries(localStorage).forEach(([key, value]) => {
        value = JSON.parse(value);
        let { priority, text, isDone } = value;
        append(key, priority, text, isDone)
    })
    console.log('render()')
}

function append(key, priority, text, isDone) {
    let isChecked
    isDone ? isChecked = 'checked' : isChecked = '';

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

}

export default Render