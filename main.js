const helloUser = (text, name) => {
  console.log(`${text}, ${name}! :)`)
}

setTimeout(helloUser, 5000, "Привет", "чувачок")
