import { LitElement, html, customElement, property,css } from "lit-element";

// ListElement: The base class Element Creation
// this encapsulate properties, styles, events, template
// The 'render()' function will be used to return 'html'

// html: inline function that is used to return the HTML aka DOM
// customElement: used to decorate the class as custom element class
// so that it can be exposed to any other HTML template

// property: used as @property decorator to define property for data binding
// static get properties() {} to define properties for the element

const mystyle = css `
    input {
      color: yellow;
      background-color: red;
    }
  `;

@customElement('simple-element')
export class SimpleElement extends LitElement {
   // define property for the element
   @property({type: String}) name:any;

   constructor(){
     super();
   }

   // settinge the CSS property

  //  static get styles(){
  //   return css `div {color:red;}`
  //  }

  static get styles(){
    return[
      mystyle,
      css `div {color:red;}`
    ]
   }





   display(){
     // naming conventions for event
     // use - between the element type and event name
     // e.g. btn-click
     const bubbleEvent = new CustomEvent('btn-click', {
       detail:{  // the event data aka payload
         data: JSON.stringify({id:101})
       },
       bubbles:true, // the event will navigate from element to its parent
       composed:true // the event is defining the initial value + event name to be used by parent
     });
     // displatch event
     this.dispatchEvent(bubbleEvent);
   }

   // to render dom
   render(){
      return html `
        <div>
           <h3>The Simple Lit Element</h3>
           <br/>
           <div>
             <input type="button" value="click"
               @click="${this.display}"/>
           </div>
           <div>
             <strong>
                 value received for name
                 ${this.name.toUpperCase()}
             </strong>
           </div>
        </div>
      `;
   }
}
