let isToggle = false;
let timerId;
let elemButton = document.querySelector('.my-class');

function changeBackgroundColorToRandom() {
    timerId = setTimeout(function changeBackgroundColor() {
        const colors = ['red', 'blue', 'green', 'orange'];
        const randomIndex = (Math.floor(Math.random() * colors.length))
        document.body.setAttribute('style', `background-color: ${colors[randomIndex]}`);
        timerId = setTimeout(changeBackgroundColor, 2000);
    }, 2000);
}

elemButton.addEventListener('click', () => {
    isToggle = !isToggle;
    isToggle ? changeBackgroundColorToRandom() : clearTimeout(timerId);
});
