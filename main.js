const bgColorButton = document.getElementById("change-bg")
const bgColor = bgColorButton.getAttribute("data-color")
const body = document.body

const changeBgColor = () => {
  body.style.backgroundColor = bgColor
}

bgColorButton.addEventListener("click", changeBgColor)
