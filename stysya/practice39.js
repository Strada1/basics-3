const getColorBtn = document.getElementById("change-bg");
const color = getColorBtn.getAttribute("data-color");

function changeColor() {
  document.body.style.backgroundColor = color;
}

getColorBtn.addEventListener("click", changeColor);

const newDiv = document.createElement("div");
newDiv.textContent = "Hello, World";
newDiv.style.color = "red";
document.body.appendChild(newDiv);
