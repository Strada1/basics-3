// const bgColorButton = document.getElementById("change-bg")
// const bgColor = bgColorButton.getAttribute("data-color")
// const body = document.body
//
// const changeBgColor = () => {
//   body.style.backgroundColor = bgColor
// }

// bgColorButton.addEventListener("click", changeBgColor)

let inputNumElement = document.querySelector(".inputNum")
let inputNumStyles = getComputedStyle(inputNumElement)
console.log(inputNumStyles.padding)
