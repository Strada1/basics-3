// добавление и удаление новых узлов

export function addElement() {
    const newDiv = document.createElement('div');
    newDiv.textContent = `|${result}`;
    newDiv.setAttribute('id', 'firstDiv');
    document.body.appendChild(newDiv);
  
    function delElement() {
      newDiv.remove();
      newDiv.removeEventListener('click', delElement);
    };  
    newDiv.addEventListener("click", delElement);
  
    // newDiv.addEventListener("click", function () {
    //   newDiv.remove();
    //   }); или так, но тогда не добавить удаление обработчика =\
  }
    
