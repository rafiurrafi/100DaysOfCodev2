#!/usr/bin/env node
const fs = require("fs");
fs.readdir(process.cwd(), function (err, fileNames) {
  if (err) {
    console.log(err);
  }
  console.log(fileNames);
});
