const button = document.querySelector("button");
const img = document.querySelector("img");
button.addEventListener("click", (e) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const dog = JSON.parse(xhr.responseText);
      img.src = dog.message;
    }
  };
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.send();
});
