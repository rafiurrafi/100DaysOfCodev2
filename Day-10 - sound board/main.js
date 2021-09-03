const sounds = ["applauce", "boo", "gasp", "tada", "wrong", "victory"];
const buttonContainer = document.querySelector("#buttons");
sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");

  button.innerText = sound;
  button.addEventListener("click", () => {
    document.getElementById(sound).play();
  });

  buttonContainer.appendChild(button);
});
