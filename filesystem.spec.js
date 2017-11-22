'use strict';

const { read, write } = require('./filesystem');


describe('read', () => {

  it('should return a todo object with one todo', () => {
    return read('test-list.json').then((todos) => {
      expect(todos).toHaveLength(1);
    });
  });

  it('should return a todo object with clean up title', () => {
    return read('test-list.json').then((todos) => {
      expect(todos[0].title).toEqual('Clean up code');
    });
  });

  it('should return a todo object not done', () => {
    return read('test-list.json').then((todos) => {
      expect(todos[0].done).toBeFalsy();
    });
  });

  it('should return a todo object with three todo', () => {
    return read('test-list-size3.json').then((todos) => {
      expect(todos).toHaveLength(3);
    });
  });

});

describe('write', () => {

  it('should write object to in JSON file', () => {
    const newTodo = [{
      title: 'New task',
      done: false
    }];

    return write('/tmp/add.json', newTodo)
    .then(() => read('/tmp/add.json'))
    .then((todos) => {
        expect(todos).toHaveLength(1);
    });
  });
});

