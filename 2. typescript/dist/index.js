"use strict";
class Account {
    constructor(id, owner, _balance, nickName) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickName = nickName;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error(`Invalid amount ${amount}`);
        this._balance += amount;
    }
    calculateTax() { }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0)
            throw new Error("invalid amount");
        this._balance = value;
    }
}
let account = new Account(1, "Kutta", 0);
account.deposit(100);
account.balance;
class SeatAppointment {
}
class Ride {
    start() {
        Ride.rides++;
    }
    stop() {
        Ride.rides--;
    }
}
Ride.rides = 0;
var ride = new Ride();
ride.start();
var ride2 = new Ride();
ride2.start();
console.log(Ride.rides);
