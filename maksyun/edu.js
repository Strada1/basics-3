// let value = prompt("Какое официальное название JS", "")

// if (value == "ECMAScript") {
//   alert("Верно")
// } else {
//   alert("Неверно")
// }

// let value = prompt("Введите любое число","")

// if (value > 0){
//   alert('1')
// } else if (value < 0){
//   alert("-1")
// } else {
//   alert("0")
// }

// let result
// const a = prompt("")
// const b = prompt("")


// result = (a + b < 4) ? "мало" : "много"

// alert(result)

/* ============================================задача 11 */

// function calc(operation, a, b){
//   if (operation === "add") {
//     alert (a + b) 
//   } else if (operation === "multi") {
//     alert (a * b)
//   } else if (operation === "substract"){
//     alert(b - a)
//   }
// }

// calc("multi", 1,2)

/* ===========================================задача 12 */

function calc(operation, a, b){
    switch (operation){
      case "add":
        alert(a+b)
        break
      case "multi":
        alert(a*b)
        break
      case "substract":
        alert(b-a)
        break
    }
    
  }
  
  calc("substract", 1,2)