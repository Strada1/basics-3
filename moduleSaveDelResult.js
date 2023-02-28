export function SaveDelResult() {
    let resultCopy = document.createElement("div");
    resultCopy.className = "result-copy";
    resultCopy.textContent = resultText.textContent;
    calc.insertAdjacentElement("afterend", resultCopy);
    let remove = () => resultCopy.remove();
    resultCopy.addEventListener("click", remove);
};