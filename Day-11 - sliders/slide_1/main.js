const boxs = document.querySelectorAll(".box");
const holder = {};
boxs.forEach((box) => {
  box.addEventListener("click", function (e) {
    holder.obj = box.cloneNode(true);
    holder.obj.classList.add("copied-box");
    holder.obj.style.left = this.offsetLeft + "px";
    holder.obj.style.top = this.offsetTop + 200 + "px";
    console.log(e.clientX);
    //append to body
    document.body.append(holder.obj);
    console.log(holder.obj);
  });
});
