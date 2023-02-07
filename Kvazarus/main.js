function showVerticalMessage(str) {
    if (str.slice(0, 1) === 's' || str[0] === 's' || str.at(0) === 's' || str.startsWith('s')) {
        str = 'S' + str.slice(1);
    }

    if (str.length > 7) { 
        str = str.slice(0, 7) 
    }

    for (let char of str) {
        console.log(char);
    }
}

showVerticalMessage("strada111");