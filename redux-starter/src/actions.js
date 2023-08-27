import { BUG_ADD, BUG_REMOVED } from "./types";

export function bugAdded(description) {
  return {
    type: BUG_ADD,
    payload: {
      description,
    },
  };
}
export function bugRemoved(id) {
  return {
    type: BUG_REMOVED,
    payload: { id },
  };
}
