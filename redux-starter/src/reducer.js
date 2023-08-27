import * as actions from "./types";
//[]
let lastId = 0;
export function reducer(state = [], action) {
  if (action.type === actions.BUG_ADD)
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      },
    ];
  else if (action.type === actions.BUG_REMOVED)
    return state.filter((bug) => bug.id !== action.payload.id);
  else state;
}
