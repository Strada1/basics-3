const helloMessage = (text, name) => {
  console.log(`${text}, ${name}! :)`)
}

let timerId = setInterval(helloMessage, 1000, "Hello", "bro")
