"use strict";

function todosPost(db) {
  return (req, res) => {
    db.add(req.body).then(() => {
      res.end();
    });
  };
}

module.exports = todosPost;
