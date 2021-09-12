export default class Inventory {
  constructor() {
    this._products = new Array();
  }

  add(product) {
    if (this.search(product.getCode()) == null && this._products.length <= 20) {
      this._products.push(product);
      return true;
    }
    return false;
  }

  search(code) {
    let result = null;
    this._products.forEach((product) => {
      if (code === product.getCode()) {
        result = product;
      }
    });
    return result;
  }
}
