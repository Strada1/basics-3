const user = {
    
    userData: {
        'name': 'Andrey',
        'surname': 'Ryabov',
        'age': 19
    },
    
    push() {
        let key = prompt('Введите ключ : ');
        let body = prompt('Введите значение :');
        this.userData[key] = body;
    },

    log() {
        console.log(this.userData)
    }
    
}
