var one = document.querySelector(".js-one");
var button = document.querySelector(".js-button");

button.addEventListener("click", function () {
  var first = parseInt(one.value);
  var result = (first - 32) / 1.8;
  if (first !== NaN) {
    alert(result);
  } else {
    alert(" You need to input a value.");
  }
});
