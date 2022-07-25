class Account {
  id: number;
  owner: string;
  private _balance: number;
  constructor(id: number, owner: string, amount: number) {
    this.id = id;
    this.owner = owner;
    this._balance = amount;
  }
  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount " + amount);
    //transations

    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    this._balance = amount;
  }
}

class Uber {
  private static activeRides: number = 0;
  start() {
    Uber.activeRides++;
  }
  stop() {
    Uber.activeRides--;
  }
}
var ride1 = new Uber();
ride1.start();
var ride2 = new Uber();
ride2.start();
console.log();

const account = new Account(1, "Honu", 0);
account.deposite(100);
console.log(account.balance);
console.log((account.balance = 4));
