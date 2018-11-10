import {refreshRandomElements, getGridElements, numberOfGridElements, numberOfRandomElements} from './utils.js';
import './random-els.js';
import './grid-element.js';

class TestWc extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        this.innerHTML = /*html*/`
            <div className="App">
                <h1>${numberOfGridElements} elements refreshing indipendently and randomly</h1>
                ${getGridElements().map(() => '<grid-element></grid-element>').join('')}
                <h1>${numberOfRandomElements} elements refreshing randomly but all toghether</h1>
                <random-els></random-els>
      </div>`;
    }
}

window.customElements.define('test-wc', TestWc);