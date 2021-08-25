const boxs = document.querySelectorAll(".box");
const holder = {};
boxs.forEach((box) => {
  box.addEventListener("click", function (e) {
    holder.obj = box.cloneNode(true);
    holder.obj.classList.add("copied-box");
    holder.obj.style.left = this.offsetLeft + 10 + "px";
    holder.obj.style.top = this.offsetTop + 10 + "px";

    //animation box falling
    holder.obj.startX = box.offsetLeft;
    holder.obj.startY = box.offsetTop;
    holder.obj.moves = Math.floor(Math.random() * 25);
    holder.obj.interval = setInterval(moveBox, 25);
    function moveBox(e) {
      if (holder.obj.moves <= 0) {
        clearInterval(holder.obj.interval);
      } else {
        holder.obj.moves--;
        holder.obj.startX += 1;
        holder.obj.startY += 10;
        holder.obj.style.left = holder.obj.startX + "px";
        holder.obj.style.top = holder.obj.startY + "px";
      }
    }
    dragger(holder.obj);
    //append to body
    document.body.append(holder.obj);
    console.log(holder.obj);
  });
});
function dragger(element) {
  const position = {};
  element.onmousedown = dragMouse;
  function dragMouse(e) {
    position.horizontalValue = e.clientX;
    position.verticalValue = e.clientY;
    document.onmouseup = function (e) {
      document.onmouseup = null;
      document.onmousemove = null;
    };
    document.onmousemove = function (e) {
      position.replaceX = position.horizontalValue - e.clientX;
      position.replaceY = position.verticalValue - e.clientY;
      position.horizontalValue = e.clientX;
      position.verticalValue = e.clientY;
      element.style.left = element.offsetLeft - position.replaceX + "px";
      element.style.top = element.offsetTop - position.replaceY + "px";
    };
  }
}
