const forms = document.querySelectorAll('form.addTask');
const inputsInForms = document.querySelectorAll('form.addTask input');
const priorityDivs = document.querySelectorAll('div.wrapper > div');
const divMarkedAsReadyDivs = document.querySelector('div.markedAsReadyDivs')

export const objects = { forms, inputsInForms, priorityDivs, divMarkedAsReadyDivs };