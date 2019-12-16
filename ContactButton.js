const contactButtonTemplate = document.createElement("template");
contactButtonTemplate.innerHTML = `
  <style id="style">
  </style>

  <a id="link" href="">
    <div id="background">
      <div id="positioner">
        <slot></slot>
      </div>
    </div>
  </a>
`;

class ContactButton extends HTMLElement {
  static get observedAttributes() {
    return [ "background", "color", "href" ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  setStyle({ background, color }) {
    this.shadowRoot.getElementById("style").innerText = `
      #link {
        color: ${ color };
        font-size: xx-large;
        text-decoration: none;
      }
      #background {
        background: ${ background };
        padding: 30px;
        border-radius: 40px;
        margin: 10px;
        position: relative;
        transition: transform 0.1s;
      }
      #background:hover {
        transform: scale(1.2);
      }
      #positioner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
    `;
  }

  render() {
    this.shadowRoot.appendChild(contactButtonTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.setStyle({ 
      background: this.getAttribute("background"),
      color: this.getAttribute("color")
    });
    this.shadowRoot.getElementById("link").href = 
      this.getAttribute("href");
  }
};

window.customElements.define("contact-button", ContactButton);
