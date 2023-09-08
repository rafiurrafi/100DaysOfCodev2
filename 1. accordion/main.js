// create history array of object
// show history
// create delete history
//add history
//break the input
// history = [
//   {
//     id : 1,
//     title : "Buy a car",
//     amount : "-400"
//   }
// ]
class Expense {
  constructor(history = []) {
    this.history = history;
  }
  addToHistory(item) {
    this.history.push(item);
  }
  removeFromHistory(id) {
    this.history = this.history.filter((item) => item.id !== id);
  }
}
const expense = new Expense([
  {
    id: 1,
    title: "Buy car",
    amount: "-100",
  },
]);
expense.addToHistory({
  id: 2,
  title: "No cost",
  amount: "+0",
});
// expense.removeFromHistory(1);
