const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.open(
  "GET",
  "https://v6.exchangerate-api.com/v6/0d6abcbdd235fc83f073e2c7/latest/USD"
);
xhr.send();
