'use strict';

const find = require('./todoFileDB');

describe('find', () => {

  it('should return a todo object with one todo', () => {
    return find('test-list.json').then((todos) => {
      expect(todos).toHaveLength(1);
    });
  });

  it('should return a todo object with clean up title', () => {
    return find('test-list.json').then((todos) => {
      expect(todos[0].title).toEqual('Clean up code');
    });
  });

  it('should return a todo object not done', () => {
    return find('test-list.json').then((todos) => {
      expect(todos[0].done).toBeFalsy();
    });
  });

  it('should return a todo object with three todo', () => {
    return find('test-list-size3.json').then((todos) => {
      expect(todos).toHaveLength(3);
    });
  });



});

