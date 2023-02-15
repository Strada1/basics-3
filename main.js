const helloMessage = (text, name) => {
  console.log(`${text}, ${name}! :)`)
}

let timerId = setTimeout(helloMessage, 5000, "Hello", "bro")
clearTimeout(timerId)
