export const removeResult = (array) => {
    array.forEach(elem => {
        elem.addEventListener('click', () => {
            elem.remove();
        });
    })
}