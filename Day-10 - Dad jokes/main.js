fetch("https://icanhazdadjoke.com/")
  .then((res) => res.json())
  .then((data) => console.log(data));
