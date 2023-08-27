import { reducer } from "./reducer";

function createStore(reducer) {
  let state;
  let listeners = [];
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  return {
    getState: function () {
      return state;
    },
    dispatch,
    subscribe,
  };
}
export default createStore(reducer);
