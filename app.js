
const button = document.getElementById('change-bg')

function changeBackColor(){
    const color = button.getAttribute("data-color")
    document.body.style.backgroundColor = color
}
addEventListener('click',changeBackColor)





const COLOR = {
    BALCK: '#000000',
    BROWN: '#A52A2A',
    BLUE: '#0000FF',
    PINK: '#FF1493'
}
function changeBackColorInteval(color){
    let maxValue = Object.keys(color).length

    function randomNumber(max,min) {
        const val = Math.floor(Math.random() * (max - min + 1) + min)
        return val
    }
    const val = randomNumber(0, maxValue)

    setInterval(() => {
        document.body.style.backgroundColor = Object.keys(color)[val];
    }, 2000);
}
changeBackColorInteval(COLOR)