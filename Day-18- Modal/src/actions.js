export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: {
    discription: description,
  },
});
