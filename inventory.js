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

  list() {
    let i;
    let message = "";
    for (i = 0; i < this._products.length; i++) {
      message += `${this._products[i].infoHtml()} Posicion de listado: ${i} `;
    }
    return message;
  }

  insert(product, position) {
    if (position && position <= this._products.length && this.add(product)) {
      let i = this._products.length - 1;
      let j = i - 1;
      for (; i >= position; i--, j--) {
        let value = this._products[i];
        this._products[i] = this._products[j];
        this._products[j] = value;
      }
      return this._products;
    }
    return false;
  }
}
