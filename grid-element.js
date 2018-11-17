import {randomRgbVal} from './utils.js';

function getNewState () {
  return {
    width: Math.floor(Math.random() * 80), 
    color: `rgb(${randomRgbVal()}, ${randomRgbVal()}, ${randomRgbVal()})`
  };
}

class GridElement extends HTMLElement {
    constructor() {
        super();

        this.state = getNewState();
    }

    connectedCallback() {
        this.render();
        this.refreshState();
    }

    refreshState() {
        this.state = getNewState();
        this.render();
        setTimeout(this.refreshState.bind(this), Math.floor(Math.random() * 2000));
    }

    render() {
        this.innerHTML = /*html*/`
            <span style="
            display: inline-block; 
            height: 30px; 
            width: ${this.state.width}px; 
            background-color: ${this.state.color};"
            ></span>
        `;
    }
}

window.customElements.define('grid-element', GridElement);