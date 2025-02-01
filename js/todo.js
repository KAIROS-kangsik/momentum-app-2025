const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODO_STORAGE_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();

  const getToDoId = parseInt(li.id);
  toDos = toDos.filter((elem) => elem.id !== getToDoId);

  saveToDos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.todo;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = toDoInput.value;
  const tempObject = {
    id: Date.now(),
    todo: newTodo,
  };

  toDoInput.value = "";
  toDos.push(tempObject);
  paintTodo(tempObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getSavedToDos = localStorage.getItem(TODO_STORAGE_KEY);

if (getSavedToDos !== null) {
  const parsedToDos = JSON.parse(getSavedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
  // parsedToDos.forEach((elem) => toDos.push(elem));
}
