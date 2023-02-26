export const historyResults = document.querySelector(".history-results");

export function addResultToHistory(result) {
  const element = document.createElement("div");
  element.classList.add("prev-result");
  element.textContent = result;
  element.addEventListener("click", deleteResultFromHistory);
  historyResults.appendChild(element);
}

export function deleteResultFromHistory() {
  this.remove();
  this.removeEventListener("click", deleteResultFromHistory);
}


