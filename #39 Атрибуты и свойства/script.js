const inputColor = document.querySelector('#inputColor');
const body = document.querySelector('body');
const change_bg = document.querySelector('#change-bg');
const div = document.querySelector('#div');

inputColor.addEventListener('change', () => {
    change_bg.setAttribute('data-color', inputColor.value)
})

change_bg.addEventListener('click', () => {
    const data = change_bg.getAttribute('data-color');
    body.style.backgroundColor = data;
    div.classList.toggle('disabled');
    console.log(getComputedStyle(div));
})
