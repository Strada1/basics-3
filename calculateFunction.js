
export function selected(signSelected,firstNumber,lastNumber){
    let result
    switch (signSelected) {
        case 'add':
        result = Number(firstNumber) + Number(lastNumber);

        return result
        case 'sub':
        result = Number(firstNumber) - Number(lastNumber);

        return result
        case 'mult':
        result=  Number(firstNumber) * Number(lastNumber);

        return result
        case 'share':
        result =  Number(firstNumber) / Number(lastNumber);
        return result
    }
}
