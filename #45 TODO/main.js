document.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    let obj = event.target[0];

    if (obj.value === '') return

    console.log(obj.dataset.priority)

    localStorage.setItem(
        Date.now(),
        JSON.stringify({
            priority: obj.dataset.priority,
            text: obj.value,
            isDone: false
        })
    )

    obj.value = '';
}