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
    utilsScript: "js/utils.js",
  });
  document.querySelector(".iti.iti--allow-dropdown").classList.add("w-65");
  document
    .querySelector(".iti.iti--allow-dropdown .form-control")
    .classList.add("w-100");
});
