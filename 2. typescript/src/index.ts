class KeyValuePair<T, U> {
  constructor(public key: T, public value: U) {}
}
var pair = new KeyValuePair<string, string>("1", "shel");

function wrapInArr<T>(value: T) {
  return [value];
}
interface Result<T> {
  data: T | null;
  err: null | string;
}
function fetch<T>(url: string): Result<T> {
  return { data: null, err: null };
}
interface User {
  data: string;
}
interface Product {
  title: string;
}

class Person {
  constructor(public name: string) {}
}
class Customer {
  constructor(public id: number) {}
}

function echo<T extends Person>(value: T): T {
  return value;
}
echo(new Person("helo"));
