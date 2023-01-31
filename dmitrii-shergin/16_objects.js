let calculator = {
    a: NaN,
    b: NaN,
    error: 'enter a valid value',

    read(a, b) {
        this.a = Number(a)
        this.b = Number(b)
    },

    checked() {
        return (!(isNaN(this.a) || isNaN(this.b)))
            ? true
            : false
    },

    sum() {
        return this.checked()
            ? `${this.a} + ${this.b} = ${this.a + this.b}`
            : this.error
    },

    substr() {
        return this.checked()
            ? `${this.a} - ${this.b} = ${this.a - this.b}`
            : this.error
    }

}

calculator.read(10, '11')

console.log(calculator.substr())