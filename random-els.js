const randomRgbVal = () => Math.floor(Math.random() * 256);
const stateLength = 500;

class RandomEls extends HTMLElement {
    constructor() {
        super();
    }

    refreshState () {
        this.state = Array.from({length: stateLength}, () => ({
          width: Math.floor(Math.random() * 80), 
          color: `rgb(${randomRgbVal()}, ${randomRgbVal()}, ${randomRgbVal()})`
        }));
      }

    connectedCallback() {
        this.refreshStateAndRender();
        setInterval(this.refreshStateAndRender.bind(this), 500);
    }
    
    refreshStateAndRender() {
        this.refreshState();
        this.render();
    }

    render() {
        this.innerHTML = this.state.map((el) => /*html*/`
            <span style="
                display: inline-block; 
                height: 30px; 
                width: ${el.width}px; 
                background-color: ${el.color};"
            ></span>`).join('');
    }
}

window.customElements.define('random-els', RandomEls);