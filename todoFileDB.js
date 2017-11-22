'use strict';

const { read, write } = require('./filesystem')

class TodoFileDB {
  constructor (path) {
    this.path = path;
  }

  getAll() {
    return read(this.path)
  }

  async add(todo) {
    const todos = await read(this.path);
    todos.push(todo);
    await write(this.path, todos);
  }
}

module.exports = TodoFileDB;