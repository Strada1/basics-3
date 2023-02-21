const button = document.querySelector('#buttonTimer');

function start() {
    timer = setInterval(() => {
        let date = new Date();
        console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`)
    }, 1000);
};


function stop() {
    clearInterval(timer);
};

button.addEventListener('click', () => {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        start()
    } else {
        stop()
    }
});
