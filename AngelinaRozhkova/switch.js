function calc(a, operation, b)  {
    switch (operation)  {
        case "add":
            return a + b;
        case "multi":
            return  a * b;
        case "subtract":
            return a % b;
        default:
            alert('Wrong!');
        break;
    }
}

console.log (calc(3, 'multi', 2));