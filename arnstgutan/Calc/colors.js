export const colorChangeBtn = document.querySelector("#change-bg");
export const body = document.querySelector(".body_container");
export const colorCodes = document.querySelectorAll(".color-code");
export const saveColorBtn = document.querySelector("#save-bg");
export const colorsContainer = document.querySelector(".colors-container");
export const example = document.querySelectorAll(".example");

export function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 256);
  console.log(randomColor);
  return randomColor;
}

export function changeColor() {
  body.style.backgroundColor =
    "rgb(" +
    getRandomColor() +
    "," +
    getRandomColor() +
    "," +
    getRandomColor() +
    ")";
}

export function getListColorsValues() {
  colorCodes.forEach((colorCode) => {
    let code = colorCode.previousElementSibling;
    let styles = getComputedStyle(code);
    console.log(styles.backgroundColor);
    colorCode.textContent = styles.backgroundColor;
  });
}

export function saveColorFunction() {
  let bodyStyle = getComputedStyle(body);
  let bodyColorOnSave = bodyStyle.backgroundColor;
  console.log(bodyColorOnSave);

  const newColorEx = document.createElement("div");
  colorsContainer.appendChild(newColorEx);
  newColorEx.classList.add("color-example");

  const newExample = document.createElement("div");
  newColorEx.appendChild(newExample);
  newExample.classList.add("example");
  newExample.style.backgroundColor = bodyColorOnSave;

  const newCode = document.createElement("div");
  newColorEx.appendChild(newCode);
  newCode.classList.add("color-code");
  newCode.textContent = bodyStyle.backgroundColor;

  const newDelete = document.createElement("div");
  newColorEx.appendChild(newDelete);
  newDelete.classList.add("delete-example");
}

export function setBGfromColorList(exp) {
  let exampleBGColor = getComputedStyle(exp).backgroundColor;
  body.style.backgroundColor = exampleBGColor;
}

export function deleteColorFromList(exp) {
  let colorExampleToDelete = exp.parentElement;
  console.log(colorExampleToDelete);
  colorExampleToDelete.remove();
}
