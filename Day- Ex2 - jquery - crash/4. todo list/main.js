const items = [
  { _id: 1, title: "Feed Cow" },
  { _id: 2, title: "Milk Cow" },
  { _id: 3, title: "Bathe Cow" },
  { _id: 4, title: "Sleep Cow" },
];

// decare variables
const itemContainer = document.querySelector(".todo-list__items");
items.map((item) => {
  displayItem(item);
});
function displayItem(item) {
  const singleItemContainer = document.createElement("div");
  singleItemContainer.className = "todo-list__item px-40";
  singleItemContainer.innerHTML = ` <div class="todo-list__item-text">${item.title}</div>
  <div class="todo-list__item-actions"> 
    <a href="javascript:void(0)" id = "${item._id}" onclick = "editItem('${item.title}', this)" ><i class="fa fa-pencil"></i></a>
    <a href="javascript:void(0)" id = "${item._id}"><i class="fa fa-trash"></i></a>
  </div>`;
  itemContainer.append(singleItemContainer);
}

// Edit item function
function editItem(item, evt) {
  let itembox = evt.parentElement.parentElement;
  itembox.innerHTML = `
  <input type="text" class="todo-list__item-input" value = "${item}" />
  <a href="javascript:void(0)" class="todo-list__item-input-submit"
    >Submit</a
  >
  `;
}
