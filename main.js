let i = 19
let j = 0
while (j < 19) {
    j++
    console.log(j)
}

do {
    j++ 
    console.log(j)
} while(j < 19)


for(let i = 1; i < 20; i++) {
    console.log(i)
    break
}

for(let i = 1; i < 20; i++) {
    if(i % 2== 0) continue 
    console.log(i)
    
}
