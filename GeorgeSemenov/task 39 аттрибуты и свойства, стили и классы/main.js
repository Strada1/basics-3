const colors=[
  `red`,
  'blue',
  'grey',
  'green',
  'yellow',
  'orange',
  'pink'
]

console.log(Math.random());
let button = document.getElementById("change-bg");
let body = document.body;
button.addEventListener("click",()=>{
  const bgColor = button.getAttribute('data-color');
  body.style.backgroundColor = bgColor;
  console.log(`getComputedStyle = ${JSON.stringify(getComputedStyle(button))}`);
})

let interval = setInterval(()=>{
  body.style.backgroundColor=colors[
    Math.floor(colors.length*Math.random())
  ]
},2000)
