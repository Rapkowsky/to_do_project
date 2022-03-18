const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

function addTodo(e) {
	e.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	const newTodo = document.createElement("li");
	newTodo.innerText = "testRR";
	newTodo.classList.add("todo-item");
	todoDiv.appendChild(newTodo);

	const completeBtn = document.createElement("button");
	completeBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
	completeBtn.classList.add("complete-btn");
	todoDiv.appendChild(completeBtn);

	const trashBtn = document.createElement("button");
	trashBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
	trashBtn.classList.add("complete-btn");
	todoDiv.appendChild(trashBtn);

	todoList.appendChild(todoDiv);
}

todoBtn.addEventListener("click", addTodo);
