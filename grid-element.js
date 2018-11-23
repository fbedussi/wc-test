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
        this.parser = new DOMParser();
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
        const style = `display: inline-block; 
        height: 30px; 
        width: ${this.state.width}px; 
        background-color: ${this.state.color};`;
        const newDom = `<span style="${style}"></span>`;
        if (this.children.length) {
            morphdom(this.children[0], newDom);
        } else {
            this.innerHTML = newDom;
        }
    }
}

window.customElements.define('grid-element', GridElement);