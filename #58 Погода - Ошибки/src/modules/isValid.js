let regexp = /[\\(\_)\.!@"'\*%$;^\<>{}?&+=1234567890]/gm;

function isValid(str) {
    return (
        !regexp.test(str)
    )
}

export default isValid