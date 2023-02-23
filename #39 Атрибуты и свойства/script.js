const inputColor = document.querySelector('#inputColor');
const body = document.querySelector('body');
const change_bg = document.querySelector('#change-bg');
const disableRandomBC = document.querySelector('#disableRandomBC');

inputColor.addEventListener('change', () => {
    change_bg.setAttribute('data-color', inputColor.value)
})

change_bg.addEventListener('click', () => {
    const data = change_bg.getAttribute('data-color');
    body.style.backgroundColor = data;
})

disableRandomBC.addEventListener('click', () => {
    clearInterval(intervalSetBC);
})





const colors = ['red', 'blue', 'green', 'orange'];

function setRandomBC(colors) {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    body.style.backgroundColor = randomColor;
}

let intervalSetBC = setInterval(() => {
    setRandomBC(colors)
}, 1000);