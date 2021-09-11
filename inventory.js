export default class Inventory {
  constructor() {
    this._products = new Array();
  }

  add(product) {
    this._products.push(product);
    return true;
  }
}
