const userName: Array<string> = [];

const promise : Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});
