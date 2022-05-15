// Bug Action types

export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";

// actions
export function bugAdded() {
  return {
    type: BUG_ADDED,
    payload: {
      description: "bug 1",
    },
  };
}
export function bugRemoved() {
  return {
    type: BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}

let lastId = 0;
export default function reducer(state, action) {
  switch (action.type) {
    case BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
