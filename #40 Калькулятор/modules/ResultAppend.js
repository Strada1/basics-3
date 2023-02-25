function resultAppend(result, results) {
    let div = document.createElement('div');
    div.textContent = result;
    results.appendChild(div);
}

export default resultAppend;