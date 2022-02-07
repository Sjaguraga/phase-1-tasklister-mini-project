/*document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit' (e)=>{
  e.preventDefault()
  form.reset()
  })
});

function buildToDo(toDo){
let p = document.createElement('p')
let btn = document.createElement('button')
btn.addEventListener('click', handleDelete)
p.textContent = toDo
p.appendChild(btn)
console.log('p')
document.querySelector('#create-task-form').appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}*/





const newTaskDescription = document.getElementById("new-task-description");
const theList = document.getElementById("tasks");

const createNewTask = event => { 
  event.preventDefault(); 
  const newTask = document.createElement('li');

  newTask.innerText = newTaskDescription.value;
  createButton(newTask);
  theList.appendChild(newTask);

  event.target.reset();
};

const createButton = task => {
   const btn = document.createElement('button');
    btn.innerText = "X";

    task.appendChild(btn);
    btn.addEventListener('click',  (e) => deleteTask(e));
}

const deleteTask = (e) => {
  const selectedTask = e.target.parentElement;
  theList.removeChild(selectedTask);
}

document.querySelector('#create-task-form').addEventListener("submit"
, (e) => createNewTask(e))