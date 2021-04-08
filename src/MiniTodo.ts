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

    <button @click=${this.addName} >ADD</button>

  <h2> people</h2>
  <ul>
    ${this.people.map(p=> html`
    <li>${p.name}</li>`)}
  </ul>
    `;
  }
  updateName(e: {target: HTMLInputElement}){
    this.name = e.target.value;
  }

  addName(){
    this.people = [... this.people,{name:this.name}];
    this.name = " ";
  }
  
}
