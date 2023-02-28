function addTask(event) {
    const target = event.target.querySelector('.input-adding-task');
    const insertPosition = target.parentElement.nextElementSibling;
    const elem = `<label class="task">
    <input class="visually-hidden task-checkbox" type="checkbox" name="high" value="first-value">
    <span class="task-mark"></span>
    <span class="task-label">${target.value}
    </span>
    <button class="button button-delete">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line y1="-0.5" x2="20.7803" y2="-0.5" transform="matrix(0.710506 0.703691 -0.65218 0.758064 0 1)"
          stroke="#998899" />
        <line y1="-0.5" x2="20.8155" y2="-0.5" transform="matrix(0.693335 -0.720616 0.670126 0.742247 1 16)"
          stroke="#998899" />
      </svg>
    </button>
  </label>`
    insertPosition.insertAdjacentHTML('afterbegin', elem);
    event.preventDefault();
}

document.addEventListener('submit', (event) => addTask(event));