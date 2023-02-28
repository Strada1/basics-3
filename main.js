let button = document.getElementById('inputOne');

function addTask() {
    let textTask = document.getElementById('textOne').value; // +

    let f = document.createElement("form");
    form.classList.add("todo");

    let c = document.createElement("input");
    c.type = "checkbox";

    let s = document.createElement("span");
    s.textContent = textTask;

    let b = documnet.createElement("button");
    b.classList.add("closeButton");

    f.appendChild(c);
    f.appendChild(s);
    f.appendChild(b);

          document.getElementsByClassName('high').appendChild(f);
}
button.addEventListener('click', addTask);