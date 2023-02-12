
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const animal = animals.find(function(el) {
return el.length > 5 && el.length < 9
});
console.log(animal);