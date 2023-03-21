import { LitElement, html, css } from 'lit';
import "./my-card-dani.js"; 

export class TeamRoster extends LitElement{
    static get tag() {
        return 'team-roster'; 
    }

    static get properties(){    
        return {
        players: {type: Array},
        teamName: {type: String}, 
        }
    }

    constructor(){
        super();
        this.players = []; 
        this.teamName = "Champa Bay Lightning"; 
        this.updateRoster(); 
    }

    updateRoster(){
        fetch(new URL('../assets/players.json', import.meta.url).href);
    }



    static get styles(){
        return css`
        :host{
            display: block; 
        }
        .wrapper{
            display: inline-flex; 
            
        }
        .item{
            display: flex; 
        }
        `;
    }

    render(){
       return html`
       <h2>${this.teamName}</h2> 
       <div class="wrapper">
        ${this.players.map(player => html`
         <div class="item">
           <my-card-dani name="${player.name}" imageUrl="${player.imageUrl}" textbox1="${player.textbox1}" 
           menuLabel="${player.menuLabel}" 
           textbox2="${player.textbox2}"> </my-card-dani>
           </div>
        `)}
        </div>
       `;
    }
}
customElements.define(TeamRoster.tag, TeamRoster); 