export default function selected({ target }) {
  this.element = document.createElement("ul");
  target.appendChild(this.element);

  this.state = {
    languages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    this.element.innerHTML = `
            ${this.state.languages
              .map((v) => {
                return `<li style="margin-right: 8px;">${v}</li>`;
              })
              .join("")}
        `;
  };

  this.render();
}
