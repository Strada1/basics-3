const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion', 'fdsflkdfs']
const checkLongWord = animals.findIndex(word => word.length > 7, 2)
//  longWord = animals[checkLongWord]

console.log(animals[checkLongWord])