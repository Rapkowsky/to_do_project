const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-add-btn");
const todoList = document.querySelector(".todo-list");
const todoTask = document.querySelector(".todo");
const filterOption = document.querySelector(".todo-filter");

function addTodo(e) {
	// Preventing natural behaviour
	e.preventDefault();
	if (todoInput.value != "") {
		// Creating todo div
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");
		// Creating list
		const newTodo = document.createElement("li");
		newTodo.innerText = todoInput.value;
		// Saving to local storage
		saveLocalTodos(todoInput.value);
		newTodo.classList.add("todo-item");
		todoDiv.appendChild(newTodo);
		// Creating completed button
		const completeBtn = document.createElement("button");
		completeBtn.innerHTML = '<i class="icon fa-solid fa-circle-check"></i>';
		completeBtn.classList.add("complete-btn");
		todoDiv.appendChild(completeBtn);
		// Creating trush button
		const trashBtn = document.createElement("button");
		trashBtn.innerHTML = '<i class="icon fa-solid fa-trash"></i>';
		trashBtn.classList.add("trash-btn");
		todoDiv.appendChild(trashBtn);
		// Incjecting complete todo block
		todoList.appendChild(todoDiv);

		todoInput.value = "";
	} else {
		console.log("Treść zadania nie może być pusta!");
	}
}

function deleteTodo(e) {
	const item = e.target;
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		todo.classList.add("fall");
		removeLocalTodos(todo);
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}
}
function markTodoCompleted(e) {
	const item = e.target;
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

function saveLocalTodos(todo) {
	let todos;

	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.push(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
	let todos;

	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.forEach(function (todo) {
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");

		const newTodo = document.createElement("li");
		newTodo.innerText = todo;
		newTodo.classList.add("todo-item");
		todoDiv.appendChild(newTodo);
		//Creating completed button
		const completeBtn = document.createElement("button");
		completeBtn.innerHTML = '<i class="icon fa-solid fa-circle-check"></i>';
		completeBtn.classList.add("complete-btn");
		todoDiv.appendChild(completeBtn);
		// Creating trash Btn
		const trashBtn = document.createElement("button");
		trashBtn.innerHTML = '<i class="icon fa-solid fa-trash"></i>';
		trashBtn.classList.add("trash-btn");
		todoDiv.appendChild(trashBtn);

		todoList.appendChild(todoDiv);
	});
}

function removeLocalTodos(todo) {
	let todos;

	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem("todos", JSON.stringify(todos));
}

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", markTodoCompleted);
filterOption.addEventListener("change", filterTodo);
document.addEventListener("DOMContentLoaded", getTodos);
