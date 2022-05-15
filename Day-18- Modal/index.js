import { bugAdded, bugRemoved } from "./src/actions";
import { BUG_ADDED, BUG_REMOVED } from "./src/actionTypes";
import store from "./src/store";

store.subscribe(() => {
  console.log("Logg");
});

store.dispatch(bugAdded());

store.dispatch(bugRemoved());
console.log(store);
