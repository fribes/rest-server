"use strict";

const fs = require("fs");

function read(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, content) => {
      if (err) reject(err);
      else resolve(JSON.parse(content));
    });
  });
}

function write(path, todo) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(todo, null, 2), "utf-8", err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

module.exports = {
  read,
  write
};
