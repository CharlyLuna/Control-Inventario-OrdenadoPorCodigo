import Product from "./product.js";
import Inventory from "./inventory.js";

class App {
  constructor() {
    this._inventory = new Inventory();
    this._btnAdd = document.getElementById("btnAdd");
    this._btnAdd.addEventListener("click", this.addProduct);
    this._btnSearch = document.getElementById("btnSearch");
    this._btnSearch.addEventListener("click", this.searchProduct);
    this._btnList = document.getElementById("btnList");
    this._btnList.addEventListener("click", this.listProducts);
    this._btnInsert = document.getElementById("btnInsert");
    this._btnInsert.addEventListener("click", this.insertProduct);
  }

  addProduct = () => {
    let info = document.getElementById("info");
    let product = Product.readForm();
    if (!product) {
      info.innerHTML +=
        "<h3>ERROR:Todos los campos deben llenarse para agregar el producto</h3>";
      return;
    }
    let added = this._inventory.add(product);
    if (added) {
      info.innerHTML += `Producto agregado: ${product.infoHtml()}`;
    } else {
      info.innerHTML +=
        "<h3>Este producto no puede ser agregado porque ya existe ó excede el limite de productos</h3>";
    }
  };

  searchProduct = () => {
    let info = document.getElementById("info");
    let code = document.getElementById("txtCode").value;
    let search = this._inventory.search(code);
    if (search == null) {
      info.innerHTML += "<h3>Este codigo de producto no se ha encontrado</h3>";
    } else {
      info.innerHTML += `<h3>Encontramos: ${search.infoHtml()} <h3>`;
    }
  };

  listProducts = () => {
    let info = document.getElementById("info");
    info.innerHTML += `LISTADO DE PRODUCTOS: ${this._inventory.list()}`;
  };

  insertProduct = () => {
    let product = Product.readForm();
    let position = document.getElementById("txtPos").value;
    let info = document.getElementById("info");
    if (!product) {
      info.innerHTML +=
        "<h3>ERROR:Todos los campos deben llenarse para insertar el producto</h3>";
      return;
    }
    let inserted = this._inventory.insert(product, position);
    if (!inserted) {
      info.innerHTML +=
        "<h3>Este producto no ha podido ser insertado porque ya existe ó no se puso un valor valido en la posición</h3>";
      return;
    }
    info.innerHTML += "<h3>Producto insertado</h3>";
  };
}
new App();
