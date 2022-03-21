const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");
const todoTask = document.querySelector(".todo");
const filterOption = document.querySelector(".todo-filter");

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

function deleteComplete(e) {
	const item = e.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.classList.add("fall");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function filterTodo(e) {
	const tasks = todoList.childNodes;
	tasks.forEach(function (task) {
		switch (e.target.value) {
			case "all":
				task.style.display = "flex";
				break;
			case "completed":
				if (task.classList.contains("completed")) {
					task.style.display = "flex";
				} else {
					task.style.display = "none";
				}
				break;
			case "uncompleted":
				if (!task.classList.contains("completed")) {
					task.style.display = "flex";
				} else {
					task.style.display = "none";
				}
				break;
		}
	});
}

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteComplete);
filterOption.addEventListener("change", filterTodo);
