class Account {
  id: number;
  owner: string;
  balance: number;
  constructor(id: number, owner: string, amount: number) {
    this.id = id;
    this.owner = owner;
    this.balance = amount;
  }
  deposite(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount " + amount);
    this.balance += amount;
  }
}

const account = new Account(1, "Honu", 0);
account.deposite(100);
console.log(account);
