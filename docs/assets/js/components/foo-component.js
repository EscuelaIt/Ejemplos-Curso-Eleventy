import { LitElement, html, css } from 'lit';

export class FooComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: red;
      }
    `
  ];

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  render() {
    return html`
      Esto es foo component. ${this.counter}
      <p>
        <button @click="${this.add}">Incrementa</button>
      </p>
    `;
  }
  add() {
    this.counter ++;
  }
}
customElements.define('foo-component', FooComponent);
