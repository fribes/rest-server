'use strict';
const express = require('express');
const todoGet = require('./todoGet')

main();

function main() {
  const app = express();

  app.get('/todos', function (req, res) {
    todoGet().then( (resp) => {
      res.send(resp);
    });
  })

  app.listen(3000)
}
