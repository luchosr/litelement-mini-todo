import { LitElement, html, property } from 'lit-element';

export class MiniTodo extends LitElement {
 /*  @property({ type: String }) title = 'mini todo'; */
 @property({ type: String })

  name = "";
  title= "mini-todo"

  private people = [{name: "Rudolph"}]

  render() {
    return html`
  <p>hello ${this.name? this.name : "World"}</p>
  <label>Nombre</label>
  <input type="text" placeholder="Nombre por favor" value=${this.name} @input=${this.updateName}>
    `;
  }
  updateName(e: {target: HTMLInputElement}){
    this.name = e.target.value;
  }

  
}
