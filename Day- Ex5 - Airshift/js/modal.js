const modal = document.querySelector(".section-modal");
const openModalBtn = document.querySelectorAll(".slider-btn");
const modalCloseBtn = document.querySelector(".modal-content__close");

for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener("click", () => {
    openModal();
  });
}
modalCloseBtn.addEventListener("click", () => {
  closeModal();
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal() {
  modal.style.display = "block";
  modal.style.animationName = "openModalAnim";
  modal.style.animationDuration = "1s";
}
function closeModal() {
  modal.style.display = "none";
}

// Phone number in modal
$(document).ready(function () {
  // Vanilla Javascript
  var input = document.querySelector("#modal-telephone");
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
  // document.querySelector(".iti.iti--allow-dropdown").classList.add("w-75");
  // document
  //   .querySelector(".iti.iti--allow-dropdown .form-control")
  //   .classList.add("w-100");
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
  // document
  //   .querySelector(".section-tracking-download .iti.iti--allow-dropdown")
  //   .classList.add("w-65");
  // document
  //   .querySelector(
  //     ".section-tracking-download .iti.iti--allow-dropdown .form-control"
  //   )
  //   .classList.add("w-100");
}); // End of document ready
