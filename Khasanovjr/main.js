/*function calc(operation, a, b) {
    if (operation=='add') {
        console.log(a + b);
    }
    else if (operation=='multi') {
        console.log(a * b);
    }
    else if (operation=='subtract') {
        console.log(a - b);
    }
    else {
        console.log("Error")
    }
}
*/

function calc(operation, a, b) {
    switch (operation) {
        case "add":
            console.log(a + b);
            break;
        case "multi":
            console.log(a * b);
            break;
        case "subtract":
            console.log(a - b);
            break;
        default:
          console.log("Other");
          break;
      }
}

calc("add", 3, 2)
calc("multi", 1, 2)
calc("subtract", 3, 2)