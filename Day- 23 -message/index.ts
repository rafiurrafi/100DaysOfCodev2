interface Product {
  name: string;
  price: string;
}
type optional = {
  [property in keyof Product]?: Product[property];
};
class Store<T> {
  protected _objects: T[] = [];
  add(object: T): void {
    this._objects.push(object);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
class CompossibleStore<T> extends Store<T> {
  compose() {}
}
class searchableStore<T extends { name: string }> extends Store<T> {
  // find(name: string): T | undefined {
  //   return this._objects.find((obj) => obj.name === name);
  // }
}
class ProductStore extends Store<Product> {
  filter(category: string): Product[] {
    return [];
  }
}
let store = new CompossibleStore<Product>();
store.find("name", "saad");
store.find("price", 109);
