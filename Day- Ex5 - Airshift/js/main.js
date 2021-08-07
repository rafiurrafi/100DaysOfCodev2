$(document).ready(function () {
  // Vanilla Javascript
  var input = document.querySelector("#telephone");
  intlTelInput(input, {
    // options here
    initialCountry: "bd",
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return "";
    },
    separateDialCode: true,
    utilsScript: "js/utils.js",
  });
  document.querySelector(".iti.iti--allow-dropdown").classList.add("w-65");
  document
    .querySelector(".iti.iti--allow-dropdown .form-control")
    .classList.add("w-100");
  // Tracking page
  var input = document.querySelector("#telephone-track");
  intlTelInput(input, {
    // options here
    initialCountry: "bd",
    customPlaceholder: function (
      selectedCountryPlaceholder,
      selectedCountryData
    ) {
      return "";
    },
    separateDialCode: true,
    utilsScript: "js/utils.js",
  });
  document
    .querySelector(".section-tracking-download .iti.iti--allow-dropdown")
    .classList.add("w-65");
  document
    .querySelector(
      ".section-tracking-download .iti.iti--allow-dropdown .form-control"
    )
    .classList.add("w-100");
}); // End of document ready

// .................................
// quantity handling in cart page
// .................................
function handleProductQuantity(productId, operation) {
  const product = document.querySelector("#" + productId);
  if (operation == "inc") {
    let value = +product.innerText++;
    console.log(value);
  } else {
    // if(value ===0) break;
    let value = +product.innerText--;
    console.log(value);
  }
}
