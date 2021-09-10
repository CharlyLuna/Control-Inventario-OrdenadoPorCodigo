export default class Product {
  constructor(code, name, quantity, cost, position) {
    this._code = code;
    this._name = name;
    this._quantity = quantity;
    this._cost = cost;
    this._position = position;
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
    ${this._quantity} pieza(s) ${this._cost}$ Posicion:
    ${this._position} Valor de mercancia: ${this.getValue()}$
    </p>
    </div>
    `;
  }
}
