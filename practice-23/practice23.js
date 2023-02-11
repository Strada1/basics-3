//showVerticalMessage('strada');
// S
// t
// r
// a
// d
// a

function showVerticalMessage(str) {
    let SlicedStr = str.slice(0, 6);
    console.log(SlicedStr);
    for (const iteration of SlicedStr) 
    if (iteration === SlicedStr.at(0)) {
        console.log (iteration.toUpperCase())
    }    else {
        console.log (iteration.toLowerCase());
    }
}
    

showVerticalMessage('stradaaaaaaaaaa');