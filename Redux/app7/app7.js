var expect = require('expect');

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//const {createStore} = require('redux');
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    listeners.forEach(listener => listener());
    return () => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return {getState, dispatch, subscribe};
}

const store = createStore(counter);
const render = () => {
  console.log(store.getState());
}

store.subscribe(render);
store.dispatch({type: 'INCREMENT'});
