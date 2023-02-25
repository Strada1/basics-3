random = () => {
  let a = Math.random();
  console.log(a);
  let b = Math.floor((a) * 12);
  console.log(b);
};
random();

const colors = ['red', 'violet', 'purple', 'green', 'orange'];

let randomColor = colors[Math.floor(Math.random()*colors.length)];

console.log(randomColor);

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

console.log(getRandomColor());