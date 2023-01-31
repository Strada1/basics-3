function calc(x, y, operation){
    let r;
    switch (operation) {
        case "mult":
            r= x*y;
            break;
        case "add":
            r = x+y;
            break
        case "sub":
            r = x - y;
            break;
        case "div":
            r= x/y;
            break;
    }
    return r;

}

console.log(calc(2,2,"mult"))

console.log(calc(2,2,"div"))

console.log(calc(2,2,"add"))

console.log(calc(2,2,"sub"))
