//select elements
const input = document.getElementById('to-do input');
const addbutton = document.getElementById('add-btn');
const addbutton1 = document.getElementById('add-btn1')
const todolist = document.getElementById('todo-list');
//add functions
function addTask() {
    const task = input.value.trim();
    if (task !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span>${task}</span>
        <button onclick="deleteTask(this)">delete</button>
        `;
        todolist.appendChild(li);
        input.value = '';
    }
    else {
        alert("please enter a task !");
    }
}
function removeAll() {
    todolist.innerHTML = '';
}



//delete function 
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
//eventlisner
addbutton.addEventListener('click', addTask);
addbutton1.addEventListener('click', removeAll)
input.addEventListener('keypress', (e) => {
    if (e.key === 'enter') {
        addTask();
    }
});
