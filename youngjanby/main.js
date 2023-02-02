let List = {
    name: 'Janby',
}

let clone = {}

for (let ui in List) {
    clone[ui] = List[ui]
}

clone.name = 'youngjanby';


console.log(List.name)
console.log(clone.name)