let n = 1
while (n < 4) {
  console.log(`${n} while`)
  n++
  break
  console.log(n - 1)
}

do {
  console.log(`${n} do while`)
  n++
} while (n <= 4)

for (let i = 0; i <= 4; i++) {
  console.log(`${i} for`)
}

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) continue
  console.log(i)
}
