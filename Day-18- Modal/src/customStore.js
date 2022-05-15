function createStore(reducer) {
  let state = 0;
  const dispatch = (action) => {
    state = reducer(state, action);
  };
  const getState = () => {
    return state;
  };
  return {
    dispatch,
    getState,
  };
}
