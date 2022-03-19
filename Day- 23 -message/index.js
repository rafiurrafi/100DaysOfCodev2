const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const messageInput = document.querySelector("#message");
  const encrypted = btoa(messageInput.value);

  const linkInput = document.querySelector("#link-input");
  linkInput.value = encrypted;
});
