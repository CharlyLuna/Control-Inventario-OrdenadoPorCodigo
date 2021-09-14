export default class Product {
  constructor(code, name, quantity, cost) {
    this._code = code.toUpperCase();
    this._name = name.toUpperCase();
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
      <h3>
        ${this._code}-${this._name}
      </h3>
      <p>
    ${this._quantity} PIEZA(s) COSTO:${this._cost}$ 
      VALOR DE MERCANCIA: ${this.getValue()}$
    </p>
    </div>
    `;
  }

  static readForm() {
    let inpCode = document.getElementById("txtCode");
    let inpName = document.getElementById("txtName");
    let inpQuantity = document.getElementById("txtQuantity");
    let inpCost = document.getElementById("txtCost");

    let code = inpCode.value;
    let name = inpName.value;
    let quantity = inpQuantity.value;
    let cost = inpCost.value;
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
