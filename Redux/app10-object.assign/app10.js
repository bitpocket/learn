var expect = require('expect');
var deepFreeze = require('deep-freeze');

const toggleTodo = (todo) => {
  // todo.completed = !todo.completed;
  // return todo;

  return Object.assign({}, todo, {
    completed: !todo.completed
  });

  // return {
  //   ...todo,
  //   completed: !todo.completed
  // };
};

const testToggleTodo = () => {
  const todoBefore = {
    id: 0,
    test: 't1',
    completed: false
  };

  const todoAfter = {
    id: 0,
    test: 't1',
    completed: true
  };

  deepFreeze(todoBefore);

  expect(
    toggleTodo(todoBefore)
  ).toEqual(todoAfter);
};

testToggleTodo();
console.log('test passed');
