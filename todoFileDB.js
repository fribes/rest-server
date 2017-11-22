'use strict';

const fs = require('fs');

function find(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(
      path,
      (err, content) => {
        if (err) reject(err);
        else resolve(JSON.parse(content));
      }
    );
  });
}

module.exports = find;
