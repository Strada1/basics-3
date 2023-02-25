const changeColorBtn = document.getElementById('change-bg');
const color = changeColorBtn.getAttribute("data-color");


const changeColor = function () {
    document.body.style.backgroundColor = color;
}

changeColorBtn.addEventListener("click", changeColor);