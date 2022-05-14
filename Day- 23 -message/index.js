#!/usr/bin/env node
const fs = require("fs");
fs.readdir(process.cwd(), function (err, fileNames) {
  if (err) {
    console.log(err);
  }
  const allStats = Array(fileNames.length).fill(null);
  for (let fileName of fileNames) {
    fs.lstat(fileName, (err, state) => {
      console.log(fileName, state.isFile());
    });
  }
});
