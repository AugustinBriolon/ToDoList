//Selectors
const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');


//Events Listeners
toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteToDo);


//Functions
function addToDo(event) {
    event.preventDefault();
    //Create a div to hold the todo
    const toDoDiv = document.createElement('div')
    toDoDiv.classList.add('todo')
    //Create a li to hold the todo
    const newToDo = document.createElement('li')
    newToDo.innerText = toDoInput.value
    newToDo.classList.add('todo-item')
    toDoDiv.appendChild(newToDo)
    //Create a button to check the todo
    const checkBtn = document.createElement('button')
    checkBtn.innerHTML = '<i class="fas fa-check"></i>'
    checkBtn.classList.add('check-btn')
    toDoDiv.appendChild(checkBtn)
    //Create a button to delete the todo
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'
    deleteBtn.classList.add('trash-btn')
    toDoDiv.appendChild(deleteBtn)
    //Append todo to the list
    toDoList.appendChild(toDoDiv)
    //Clear the input
    toDoInput.value = ''
}

function deleteToDo(event) {
    const item = event.target;
    //Delete the todo from the list
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
        //End of animation
    }

    //Check the todo
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}