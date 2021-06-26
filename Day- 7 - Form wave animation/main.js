const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (lbl, idx) =>
        `<span style = 'transition-delay : ${idx * 50}ms'>${lbl}</span>`
    )
    .join("");
});
