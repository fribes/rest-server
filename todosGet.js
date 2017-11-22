'use strict';

function todosGet(db) {
  return (req, res) => {
    db.getAll().then( (todos) => {
      res.send(todos);
    });
  }
}

module.exports = todosGet;