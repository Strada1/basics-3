import data from './data.json' assert {type: 'json'};

data.users.forEach(element => {

    let {firstName, lastName, dateOfBirth, knowsAs} = element;
    
    try {
        if (!firstName) throw new Error('Отуствует имя');
        if (!lastName) throw new Error('Отуствует фамилия');
        if (!dateOfBirth) throw new Error('Отуствует дата рождения');
        if (!knowsAs) throw new Error('Отуствует предназначение');
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log(`
            ${firstName} ${lastName}, born at ${dateOfBirth}, he ${knowsAs}
        `)
    }

})