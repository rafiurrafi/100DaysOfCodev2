const videoLists = document.querySelectorAll(".single-video");
const mainVideo = document.querySelector(".main-video video");
const title = document.querySelector(".main-video .title");

videoLists.forEach((video) => {
  video.addEventListener("click", function () {
    videoLists.forEach((v) => v.classList.remove("active"));
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      console.log(mainVideo);
      const text = video.children[1].innerHTML;
      title.textContent = text;
    }
  });
});
