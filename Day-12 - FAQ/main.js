const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  fetch("https://api.github.com/user/rafiurrafi")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
