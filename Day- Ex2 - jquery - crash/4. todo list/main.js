const items = [
  { _id: 1, title: "Feed Cow" },
  { _id: 1, title: "Milk Cow" },
  { _id: 1, title: "Bathe Cow" },
  { _id: 1, title: "Sleep Cow" },
];

// decare variables
const itemContainer = document.querySelector(".todo-list__items");
items.map((item) => {
  addItem(item);
});
function addItem(item) {
  const singleItemContainer = document.createElement("div");
  singleItemContainer.className = "todo-list__item px-40";
  singleItemContainer.innerHTML = ` <div class="todo-list__item-text">Feed cow</div>
  <div class="todo-list__item-actions">
    <a href="javascript:void(0)"><i class="fa fa-pencil"></i></a>
    <a href="javascript:void(0)"><i class="fa fa-trash"></i></a>
  </div>`;
  itemContainer.append(singleItemContainer);
}
