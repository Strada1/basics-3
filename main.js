const addh = document.getElementById('add_hight')
const addl = document.getElementById('add_low')
const inputh = document.getElementById('inputh')
const inputl = document.getElementById('inputl')

        var count = 50
            var count1 = 500
                var count2 = 500
const STATUSES = {
    TODO: "To Do",
    DONE: "Done",
};
const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};
const list = [
];

function addTask (event){
    event.preventDefault()
    if(event.target === addh){
        priority = PRIORITIES.HIGH
        list.push({
            name: inputh.value,
            priority
        })
        
    }
    if(event.target === addl){
        priority = PRIORITIES.LOW
        list.push({
        name: inputl.value,
        priority
        })
    }
    
    clear ()
    render()
inputh.value = ''
inputl.value = ''
console.log(list)
}

function render (){
    list.forEach(elem => {

        const NewDiv = document.createElement('div')
        NewDiv.id = 'new_hight'

    const NewCheck = document.createElement('div')
        NewCheck.className = 'check'

    const NewLabel = document.createElement('div')
        NewLabel.className = 'todo_description'
            if (elem.name == ''){
                NewLabel.textContent = "Найди себе дело"
            }
            else{
                NewLabel.textContent = elem.name
            }

        const DelNew = document.createElement('button')
            DelNew.className = 'del_hight'
                DelNew.textContent = '-'

        function DelTask(){
            let searchName = NewLabel.textContent;
            let index = list.findIndex(el => el.name === searchName);
            list.splice(index,1)
            NewDiv.remove()
            console.log (list)
            if (elem.priority === PRIORITIES.HIGH){
            count -= 85
            count1 -= 80
            count2 -= 40
                var c = count+'px'
                var d = count1+'px'
                var e = count2+'px'
                    document.querySelector('.low').style.top = c;
                        document.querySelector('.main').style.height = d;
                        document.querySelector('.main').style.top = e; 
                    return count1,count2
            }
            if (elem.priority === PRIORITIES.LOW){
                count1 -= 85
                count2 -= 42.5
                    var d = count1+'px'
                    var e = count2+'px'
                        document.querySelector('.main').style.height = d;
                        document.querySelector('.main').style.top = e;
                        return count1,count2
                }
        }
        DelNew.addEventListener("click", DelTask);

        NewDiv.appendChild(NewCheck);
            NewDiv.appendChild(NewLabel);
                NewDiv.appendChild(DelNew);

                if(elem.priority === PRIORITIES.HIGH){
                    todoBlockHigh.appendChild(NewDiv);
                }
                if(elem.priority === PRIORITIES.LOW){
                    todoBlockLow.appendChild(NewDiv);
                }
    })

    document.querySelectorAll('.check').forEach(function(check){
        var green = true
           check.addEventListener('click', function() {
                   const colors = ['red','lightgreen']
               if (green){
                   check.style.background = colors[1]
                   green = false
               }
               else {
                   check.style.background = colors[0]
                   green = true
               }
               
           })
       })
}



function clear(){

    var el = document.querySelectorAll('#new_hight').forEach(function(){
        var elem = document.getElementById("new_hight");
            elem.parentNode.removeChild(elem);
        
    })  
}

addh.addEventListener('click', moveHight)
function moveHight(){
    count += 85
    count1 += 80
    count2 += 40
        var c = count+'px'
        var d = count1+'px'
        var e = count2+'px'
            document.querySelector('.low').style.top = c;
                document.querySelector('.main').style.height = d;
                document.querySelector('.main').style.top = e; 
            return count1,count2
}

addl.addEventListener('click', moveLow)
function moveLow(){
    count1 += 85
    count2 += 42.5
        var d = count1+'px'
        var e = count2+'px'
            document.querySelector('.main').style.height = d;
            document.querySelector('.main').style.top = e;
}

addh.addEventListener('click',addTask)
addl.addEventListener('click',addTask)

render()
