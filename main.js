const helloMessage = (text, name) => {
  console.log(`${text}, ${name}! :)`)
}

setTimeout(() => {
  helloMessage("Привет", "чувачелло")
}, 5000)
