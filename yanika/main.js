"use strict"
function getAverage(marks) {
    const sumArr = marks.reduce((a, b) => a + b);
    const divide = sumArr / marks.length;
    return Math.floor(divide)
}
     
console.log(getAverage([1,1,1,1,1,1,1,2]))

//я хз я просто поменяла переменные 'var' на 'let' и 'const' и вместо 'console.log(i)' 
//написала 'return i' и у меня приняло решение... а задачу я вообще не поняла как бы я не понимала тему 
function buildFun(n) {
    const res = []
    for (let i = 0; i < n; i++) {
        res.push(() => i)
    }
    return res;
}

