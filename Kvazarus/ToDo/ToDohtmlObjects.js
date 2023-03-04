const DOMObjects = {};

try {
    const forms = document.querySelectorAll('form.addTask');
    DOMObjects.forms = forms;
    const inputsInForms = document.querySelectorAll('form.addTask input');
    DOMObjects.inputsInForms = inputsInForms;
    const priorityDivs = document.querySelectorAll('div.wrapper > div');
    DOMObjects["priorityDivs"] = priorityDivs;
    const divMarkedAsReadyDivs = document.querySelector('div.markedAsReadyDivs');
    DOMObjects.divMarkedAsReadyDivs = divMarkedAsReadyDivs;

    for (const key in DOMObjects) {
        if (DOMObjects[key].length === 0) {
            throw new Error("Не найдены заданные элементы. Скорее всего неправильно задан css селектор");
        }
    }

} catch(err) {
    console.log("Произшла ошибка при поиске в DOM");
    console.log(err);
}



export const objects = DOMObjects;