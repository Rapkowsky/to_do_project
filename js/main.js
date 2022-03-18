const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

function addTodo(e) {
	e.preventDefault();
	if (todoInput.value != "") {
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");

		const newTodo = document.createElement("li");
		newTodo.innerText = todoInput.value;
		newTodo.classList.add("todo-item");
		todoDiv.appendChild(newTodo);

		const completeBtn = document.createElement("button");
		completeBtn.innerHTML = '<i class="icon fa-solid fa-circle-check"></i>';
		completeBtn.classList.add("complete-btn");
		todoDiv.appendChild(completeBtn);

		const trashBtn = document.createElement("button");
		trashBtn.innerHTML = '<i class="icon fa-solid fa-trash"></i>';
		trashBtn.classList.add("trash-btn");
		todoDiv.appendChild(trashBtn);

		todoList.appendChild(todoDiv);

		todoInput.value = "";
	} else {
		console.log("Treść zadania nie może być pusta!");
	}
}

function deleteCheck(e) {
	const item = e.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.remove();
	}
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
