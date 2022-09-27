const button = document.querySelector("#btn")! as HTMLButtonElement;
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const input = document.querySelector("#input") as HTMLInputElement;

type Todo = {
  text: string;
  completed: boolean;
};
function getTodos() {
  const todos = localStorage.getItem("todos");
  if (!todos) return [];
  return JSON.parse(todos);
}
const todos: Todo[] = getTodos() || [];

function createTodo(todo: Todo) {
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
  list?.appendChild(item);
}

todos.forEach(createTodo);

(<HTMLFormElement>form)?.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
});
