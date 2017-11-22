'use strict';

const find = require('./todoFileDB.js')

async function todoGet() {
  const todos = await find('test-list-size3.json');
  const formattedTodos = JSON.stringify(todos, null, 2);
  return formattedTodos;
}

module.exports = todoGet;