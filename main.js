import Product from "./product.js";
import Inventory from "./inventory.js";

class App {
  constructor() {
    this._inventory = new Inventory();
    this._btnAdd = document.getElementById("btnAdd");
    this._btnAdd.addEventListener("click", this.addProduct);
  }

  addProduct = () => {
    let product = Product.readForm();
    let added = this._inventory.add(product);
    if (added) {
      info.innerHTML += product.infoHtml();
    }
  };
}
new App();
