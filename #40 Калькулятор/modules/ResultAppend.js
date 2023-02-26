function resultAppend(result, results) {
    let div = document.createElement('div');
    div.classList.add('result');
    div.textContent = result;
    results.appendChild(div);
}

export default resultAppend;