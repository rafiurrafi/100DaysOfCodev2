import { BUG_ADDED, BUG_REMOVED } from "./src/actionTypes";
import store from "./src/store";
store.subscribe(() => {
  console.log("Store changed", store.getState);
});
store.subscribe(() => {
  console.log("State changed");
});
store.dispatch({ type: BUG_ADDED, payload: { id: 1 } });
store.dispatch({
  type: BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState());
