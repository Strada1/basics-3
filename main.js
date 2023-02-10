function showVerticalMessage(word) {
    let firstLetter = word.slice(0,1);
    if (firstLetter === 's'){
      firstLetter = firstLetter.toUpperCase(); 
    };
    //вывожу
    console.log("// " + firstLetter);
    for (let char of word.slice(1,7)) {

        char = "// " + char;
        console.log(char);
    };
};

showVerticalMessage('strada');
// S
// t
// r
// a
// d
// a