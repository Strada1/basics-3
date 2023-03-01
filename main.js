const addh = document.getElementById('add_hight')
        var count = 50
            var count1 = 500
                var count2 = 500

function addNewHight (event) {
    event.preventDefault()
    console.log(hight_input.value)

    const NewDiv = document.createElement('div')
        NewDiv.className = 'new_hight'

    const NewCheck = document.createElement('div')
        NewCheck.className = 'check'

    const NewLabel = document.createElement('div')
        NewLabel.className = 'todo_description'
            if (hight_input.value==''){
                NewLabel.textContent = "Найди себе дело"
            }
            else{
                NewLabel.textContent = hight_input.value
            }

    const DelNew = document.createElement('button')
        DelNew.className = 'del_hight'
            DelNew.textContent = '-'

function move(){
    count += 90
    count1 += 70
    count2 += 35
        var c = count+'px'
        var d = count1+'px'
        var e = count2+'px'
            document.querySelector('.low').style.top = c;
                document.querySelector('.main').style.height = d;
                document.querySelector('.main').style.top = e; 
            return count1,count2
    }

    move()

function removeNewHight(){
    NewDiv.remove()
        count -=90
        count1 -= 70
        count2 -= 35
            var c = count+'px'
            var d = count1+'px'
            var e = count2+'px'
                document.querySelector('.low').style.top = c;
                    document.querySelector('.main').style.height = d;
                    document.querySelector('.main').style.top = e;

}
    DelNew.addEventListener('click',removeNewHight)

    NewDiv.appendChild(NewCheck);
        NewDiv.appendChild(NewLabel);
            NewDiv.appendChild(DelNew);

todoBlockHigh.appendChild(NewDiv);

document.querySelectorAll('.check').forEach(function(check){
    var green = false
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

addh.addEventListener('click',addNewHight);

    const addl = document.getElementById('add_low')
        
function addNewLow (event) {
    event.preventDefault()
    console.log(low_input.value)

    const NewDiv = document.createElement('div')
        NewDiv.className = 'new_low'

    const NewCheck = document.createElement('div')
        NewCheck.className = 'check'

    const NewLabel = document.createElement('div')
        NewLabel.className = 'todo_description'
        NewLabel.textContent = low_input.value
        
    const DelNew = document.createElement('button')
        DelNew.className = 'del_low'
            DelNew.textContent = '-'

function move(){
    count1 += 70
    count2 += 35
        var d = count1+'px'
        var e = count2+'px'
            document.querySelector('.main').style.height = d;
            document.querySelector('.main').style.top = e;
    }

    move()

function removeNewLow(){
    NewDiv.remove()
        count1 -= 70
        count2 -= 35
            var d = count1+'px'
            var e = count2+'px'
                document.querySelector('.main').style.height = d;
                document.querySelector('.main').style.top = e;
}
    DelNew.addEventListener('click',removeNewLow)

    NewDiv.appendChild(NewCheck);
        NewDiv.appendChild(NewLabel);
            NewDiv.appendChild(DelNew);

todoBlockLow.appendChild(NewDiv);

document.querySelectorAll('.check').forEach(function(check){
    var green = false
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

   const list = [
    NewLabel.textContent = low_input.value
]

console.log(list)

}
addl.addEventListener('click',addNewLow)

// я не понимаю флексбоксы и по этому сделал адаптацию через js
