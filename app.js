const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');

let taskArr = JSON.parse(localStorage.getItem('taskArr'));

taskArr.forEach(task => {
    toDo(task);
})

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    // console.log(input.value);
    toDo()
})


function toDo(task){
    let newTask = input.value;

    if(task){
        newTask = task.name;
    }

    const liEl = document.createElement('li');

    
    liEl.innerHTML = `<span>${newTask}</span>`;

    let trashBtn = document.createElement('i');

    trashBtn.classList.add('fas');
    trashBtn.classList.add('fa-trash');
    
    liEl.appendChild(trashBtn);

    list.appendChild(liEl);
    input.value = "";
    
    trashBtn.addEventListener('click', () => {
        liEl.remove()
        updateStorage()
    })
    updateStorage()
    
}

function updateStorage(){
    const allTasks = document.querySelectorAll('li');

    let taskArr = [];

    allTasks.forEach(task => {
        taskArr.push({
            name: task.innerText
        })
    })

    localStorage.setItem('taskArr', JSON.stringify(taskArr));
}