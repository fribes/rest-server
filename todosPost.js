'use strict';

function todosPost(db) {
  return (req, res) => {
    db.add(req.body).then( (todos) => {
      res.send('OK');
    });
  }
}

module.exports = todosPost;