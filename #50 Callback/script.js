let arr = [1,23,5,6,3,2,523,56];


function show(callback) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    callback(ul);
}

function render1(param) {
    for ( i in arr ) {
        let li = document.createElement('li');
        li.style.listStyleType = 'none';
        li.textContent = arr[i];
        param.appendChild(li);
    }
}

function render2(param) {
    for ( i in arr ) {
        let li = document.createElement('li');
        li.style.listStyleType = 'circle';
        li.textContent = arr[i];
        param.appendChild(li);
    }
}

show(render2);