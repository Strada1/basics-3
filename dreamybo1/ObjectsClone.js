let firstObject = {
    name: "Juan",
    age: 228,
    sex: "male"
}

let clone = Object.assign({},firstObject);

console.log(clone);
console.log(clone === firstObject);

clone.name="Pele";
console.log(clone);
console.log(firstObject);


