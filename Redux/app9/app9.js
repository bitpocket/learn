var expect = require('expect');
var deepFreeze = require('deep-freeze');

const addCounter = (list) => {
  return [...list, 0];
}

const removeCounter = (list, index) => {
  // list.splice (index, 1);   //mutable
  // return list;
  return [                    // immutable
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ];

  // return                   // immutable
  //   .slice(0, index)
  //   .concat(list.slice(index + 1));
};

const incrementCounter = (list, index) => {
  // list[index]++;
  // return list;

  return [                    // immutable
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ];
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
}

const testRemoveCounter = () => {
  const listBefore = [0, 10, 2];
  const listAfter = [0, 2];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter);
};

const testIncrementCounter = () => {
  const listBefore = [0, 10, 2];
  const listAfter = [0, 11, 2];

  deepFreeze(listBefore);

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter);
}

testAddCounter();
testRemoveCounter();
testIncrementCounter();

console.log('test passed');
