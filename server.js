"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const TodoFileDB = require("./todoFileDB");
const todosGet = require("./todosGet");
const todosPost = require("./todosPost");

main();

function main() {
  const app = express();
  const db = new TodoFileDB("db.json");

  app.use(bodyParser.json());

  app.get("/todos", todosGet(db));
  app.post("/todos", todosPost(db));

  app.listen(3000);
}
