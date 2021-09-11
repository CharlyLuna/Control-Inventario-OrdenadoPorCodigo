export default class Product {
  constructor(code, name, quantity, cost) {
    this._code = code;
    this._name = name;
    this._quantity = quantity;
    this._cost = cost;
    this._position;
  }

  getCode() {
    return this._code;
  }

  getValue() {
    return this._quantity * this._cost;
  }
  infoHtml() {
    return `
    <div>
      <p>
        ${this._code}-${this._name}
      </p>
      <p>
    ${this._quantity} pieza(s) Costo:${this._cost}$ 
      Valor de mercancia: ${this.getValue()}$
    </p>
    </div>
    `;
  }

  static readForm() {
    let inpCode = document.getElementById("txtCode");
    let inpName = document.getElementById("txtName");
    let inpQuantity = document.getElementById("txtQuantity");
    let inpCost = document.getElementById("txtCost");

    let code = document.getElementById("txtCode").value;
    let name = document.getElementById("txtName").value;
    let quantity = document.getElementById("txtQuantity").value;
    let cost = document.getElementById("txtCost").value;
    // deben estar llenos todos los campos para que se puede crear el producto;
    if (code && name && quantity && cost) {
      inpCode.value = "";
      inpName.value = "";
      inpQuantity.value = "";
      inpCost.value = "";
      return new Product(code, name, quantity, cost);
    } else {
      return false;
    }
  }
}
