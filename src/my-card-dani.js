import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

const tblcard= new URL('../assets/tblcard.jpeg', import.meta.url).href;

export class MyCardDani extends LitElement {
  static get properties() {
    return{
      name: {
        type: String,
        reflect: true
      },
      imageUrl: {
        type: String
      },
      textbox1: {
        type: String
      },
      menuLabel: {
        type: String
      },
      textbox2: {
        type: String
      },

    }
  };

  static get styles(){
    return css`
     .wrapper{
  width: 400px; 
  border: 2px solid black; 
  display: incline flex; 
  background-color: lightblue; 
  text-align: center;
}
.image{
  width: 400px; 
} 
@media only screen and (max-width: 600px){
  .wrapper{background-color: #000080;
  color: white;
  }
}
@media only screen and (max-width: 425px){
  details {
    display: none;
  }
}
    `;
  }

  constructor() {
    super();
    this.name = "Champa Bay Lightning";
    this.imageUrl = '../assets/tblcard.jpeg';
    this.textbox1 = "The actual best team in the NHL.";
    this.menuLabel = "More Facts";
    this.textbox2 = "Cardz by Dani";
  }

  render() {
    return html`
<div class= "wrapper"> 
  <h2>${this.name}</h2> 
  <meme-maker image-url=${this.imageUrl}>
</meme-maker>
  <div id= "textbox1">
    <p>${this.textbox1}</p>
  </div>
  <details>
    <summary>${this.menuLabel}</summary>
   <slot></slot>
 </details>

  <div id= "textbox2">
    <p>${this.textbox2}</p>
  </div>
</div> 
`;
  }
}


customElements.define('my-card-dani', MyCardDani);