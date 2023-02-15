const fun = () => {
  console.log('Hi My Friend!')
}

const result = setTimeout(() => console.log('Hi!'), 2000)
// console.log(result)
clearTimeout(result)

const timerId = setInterval(fun, 1000)
setTimeout(() => {
  clearInterval(timerId)
  console.log('No Hi!')
}, 3000)

let hours = setTimeout(function hour() {
  console.log('tick')
  hours = setTimeout(hour, 3000)
})

const printNumbers = (from, to) => {
  let before = from

  setTimeout(function go() {
    console.log(before)

    if (before < to) {
      setTimeout(go, 1000)
    }
    before += 1
  }, 1000)
}

printNumbers(1, 4)
