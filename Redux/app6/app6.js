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

const {createStore} = require('redux');
const store = createStore(counter);

const render = () => {
  console.log(store.getState());
}

store.subscribe(render);
render();

store.dispatch({type: 'INCREMENT'});
