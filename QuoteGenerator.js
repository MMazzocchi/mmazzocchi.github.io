const quotes= [
  "It's not broken... it's just not 100% fixed.",
  `You're assuming I'm responsible for this. I mean, that's true, but I'm
   offended you assumed it.`,
  "I can never do anything wrong if I never do anything at all.",
  `No success without sacrifice. No success with sacrifice either. Just no
   success.`,
  "Of course, it'd be morally and ethically despicable. But it might be fun.",
  `This is Max, we don't know what he does and neither does he. So we let him
   hang around.`,
  "'Still alive' is kind of a low standard to be living my life by.",
  "I have a story. The story is about me. And how I am a moron.",
  "I'm all for the reckless destruction of expensive hardware.",
  "I demand the freedom to make bad decisions.",
  "I'm here, but unlikely to be helpful.",
];

const quoteGeneratorTemplate = document.createElement("template");
quoteGeneratorTemplate.innerHTML = `
  <style id="style">
    * {
      font-size: small;
    }
  </style>

  <em id="quote"></em>
`;

class QuoteGenerator extends HTMLElement {
  static get observedAttributes() {
    return [ ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.appendChild(quoteGeneratorTemplate.content.cloneNode(true));
    this.shadowRoot.getElementById("quote").innerHTML =
      `"${ quotes[Math.floor(Math.random() * quotes.length)] }"`; 
  }
};

window.customElements.define("quote-generator", QuoteGenerator);
