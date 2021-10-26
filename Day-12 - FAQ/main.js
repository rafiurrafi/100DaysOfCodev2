const price = document.querySelector("#btc-price");
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    price.textContent = JSON.parse(xhr.responseText).bpi.EUR.rate;
  }
};
xhr.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
xhr.send();
