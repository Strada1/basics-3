const addh = document.getElementById('add_hight')
const addl = document.getElementById('add_low')
const inputh = document.getElementById('inputh')
const inputl = document.getElementById('inputl')

        var count = 50
            var count1 = 500
                var count2 = 500
                    var id = 1
const STATUSES = {
    TODO: "To Do",
    DONE: "Done",
};
const PRIORITIES = {
    HIGH: "High",
    LOW: "Low",
};
const list = [ ];

function addTask (event){
    event.preventDefault()
    if(event.target === addh){
        priority = PRIORITIES.HIGH
        list.push({
            name: inputh.value,
            priority,
            status:'To DO',
            id : id++,
            color:'green'
        })
        
    }
    if(event.target === addl){
        priority = PRIORITIES.LOW
        list.push({
        name: inputl.value,
        priority,
        status:'To Do',
        id : id++,
        color: 'green'
        })
    }
    
    clear ()
    render()

inputh.value = ''
inputl.value = ''
console.log(list)
return id
}

function render (){

    list.forEach(elem => {

        const NewDiv = document.createElement('div')
        NewDiv.id = 'new_hight'

    const NewCheck = document.createElement('div')
        NewCheck.className = 'check'

        const colors = ['red','lightgreen']
            if (elem.status == 'To Do'){
                NewCheck.style.background = colors[0]
            }
            if (elem.status == 'Done'){
                NewCheck.style.background = colors[1]
            }

function changeStatus (){
    
    var searchName = NewLabel.textContent;
    var index = list.findIndex(el => el.name === searchName);
        var searchTerm = NewLabel.textContent
            var searchColor = list.find(city => city.name === searchTerm).color
            
                const ids = list.find((ids) => ids.color===searchColor)
                console.log(list[index].color,'ВХОД')
                console.log(ids,'ВХОД')
             
  if (list[index].color==='green') {

        var searchName = NewLabel.textContent;
       list.findIndex(el => el.name === searchName);
        var searchTerm = NewLabel.textContent
            var searchId = list.find(city => city.name === searchTerm).id
                const ids = list.find((ids) => ids.id===searchId)
                ids.status = 'Done'
                var searchColor = list.find(city => city.name === searchTerm).color
                const idss = list.find((idss) => idss.color===searchColor)
                ids.color = 'red'
                console.log(list[index].color,'ВЫХОД')
                console.log(idss,'ВЫХОД')

                clear ()
                render()
   }
   else {
    var searchName = NewLabel.textContent;
    list.findIndex(el => el.name === searchName);
     var searchTerm = NewLabel.textContent
             var searchId = list.find(city => city.name === searchTerm).id
                const ids = list.find((ids) => ids.id===searchId)
                ids.status = 'To Do'
                var searchColor = list.find(city => city.name === searchTerm).color
                const idss = list.find((idss) => idss.color===searchColor)
                ids.color = 'green'
                console.log(list[index].color,'ВЫХОД КРАСНЫМ')
                console.log(idss,'ВЫХОД КРАСНЫМ')

             clear ()
             render()
   }
}
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

        NewCheck.addEventListener("click",changeStatus)
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
}

function clear(){
    document.querySelectorAll('#new_hight').forEach(function(){
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
