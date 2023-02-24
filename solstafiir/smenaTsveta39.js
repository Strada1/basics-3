let disco = document.querySelector(".disco");
disco.style.marginTop = "20px";

let colorsArray = [
  "red",
  "yellow",
  "lightblue",
  "green",
  "orange",
  "pink",
  "grey",
];

function discoBall() {
  const randomColor = (arr) => arr[Math.floor(Math.random() * arr.length)];
  let timer = setInterval(() => {
    document.body.style.background = randomColor(colorsArray);
    // clearInterval(timer);
  }, 2000);
}
disco.addEventListener("click", discoBall);
