const rep = document.querySelectorAll(".copyMe");
const holder = {};
rep.forEach((element, index) => {
  element.addEventListener("click", function () {
    holder.obj = element.cloneNode(true);
    holder.obj.className = "NewBorn copyMe";
    holder.obj.style.cursor = "move";
    holder.obj.style.left = element.offsetLeft + "px";
    holder.obj.style.top = element.offsetTop + 200 + "px";

    //falling animation
    holder.obj.startY = element.offsetTop;
    holder.obj.startX = element.offsetLeft;
    holder.obj.moves = Math.floor(Math.random() * 25);
    holder.obj.int = setInterval(mover, 25);
    console.log(holder.obj.moves);
    function mover() {
      if (holder.obj.moves <= 0) {
        clearInterval(holder.obj.int);
      } else {
        console.log(holder.obj.startX, holder.obj.startY);
        holder.obj.moves--;
        holder.obj.startX += 1;
        holder.obj.startY += 10;
        holder.obj.left = holder.obj.startX + "px";
        holder.obj.top = holder.obj.startY + "px";
      }
    }

    document.body.append(holder.obj);
    console.log(holder.obj);
  });
  element.style.left = index * 120 + "px";
});
