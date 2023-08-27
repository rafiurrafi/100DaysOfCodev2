// import { bugAdded, bugRemoved } from "./actions";
// import store from "./store";
// store.subscribe(() => {
//   console.log("Store", store.getState());
// });

// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugRemoved(1));
// console.log(store.getState());
import store from "./customStore";
import * as actions from "./actions";
store.subscribe(() => {
  console.log("changed");
});
store.dispatch(actions.bugAdded("Bug 1"));
console.log(store.getState());
