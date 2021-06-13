const items = [
  { _id: 1, title: "Milk the cat" },
  { _id: 2, title: "Cook rice" },
  { _id: 3, title: "Heading a song" },
];

const itemsContainer = document.querySelector("#items-container");

function showItems() {
  items.map((item) => {
    const singleItem = document.createElement("div");
    singleItem.classList.add("todo-list__item-container");
    singleItem.id = item._id;
    singleItem.innerHTML = `
        <div class="todo-list__item">
          <span>${item.title}</span>
          <span><i class="fa fa-pencil" id="edit-icon"></i></span>
          <span><i class="fa fa-trash" id="delete-icon"></i></span>
        </div>
        <form class="todo-list__item-form">
          <div class="todo-list__form-group">
            <input type="text" placeholder="New todo" />
            <button class="form-button">Add todo</button>
          </div>
        </form>
        `;
    itemsContainer.appendChild(singleItem);
  });
}
showItems();

//edit
const editIcon = document.querySelector("#edit-icon");
const editFormContainer = editIcon.parentElement.parentElement.parentElement;
const getId = editFormContainer.id;
