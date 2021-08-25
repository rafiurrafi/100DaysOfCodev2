const rep = document.querySelectorAll(".copyMe");
const holder = {};
rep.forEach((element, index) => {
  element.addEventListener("click", function () {
    holder.obj = element.cloneNode(true);
    holder.obj.classList.add("newBorn");
    holder.obj.style.cursor = "move";
    holder.obj.style.left = element.offsetLeft + "px";
    holder.obj.style.top = element.offsetTop + 200 + "px";
    document.body.append(holder.obj);
    console.log(holder.obj);
  });
  element.style.left = index * 120 + "px";
});
