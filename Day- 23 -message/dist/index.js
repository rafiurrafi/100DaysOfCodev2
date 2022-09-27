"use strict";
const button = document.querySelector("#btn");
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const input = document.querySelector("#input");
function getTodos() {
    const todos = localStorage.getItem("todos");
    if (!todos)
        return [];
    return JSON.parse(todos);
}
const todos = getTodos() || [];
function createTodo(todo) {
    const item = document.createElement("li");
    item.innerHTML = todo.text;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", (e) => {
        todo.completed = checkbox.checked;
        localStorage.setItem("todos", JSON.stringify(todos));
    });
    item.appendChild(checkbox);
    list === null || list === void 0 ? void 0 : list.appendChild(item);
}
todos.forEach(createTodo);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
});
