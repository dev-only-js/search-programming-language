export default function SelectedLanguages({ target }) {
  this.state = {
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    console.log(this.state.selectedLanguages);
    this.render();
  };

  this.render = () => {
    target.innerHTML = `
        ${this.state.selectedLanguages
          .map((item) => `<li style="margin-right: 8px;">${item}</li>`)
          .join("")}
    `;
  };

  this.render();
}
