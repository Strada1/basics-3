const createCounter = () => {
  let summ = 0
  return () => {
    return (summ += 1)
  }
}
let counterA = createCounter()
let counterB = createCounter()

console.log(counterA())
console.log(counterA())
console.log(counterA())

console.log(counterB())
