export default function SelectedLanguages({ initialState }) {
  const container = document.querySelector(".SelectedLanguage");
  this.state = {
    selectedLanguages: initialState.selectedLanguages,
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      selectedLanguages: nextState.selectedLanguages,
    };
    this.render();
  };

  this.render = () => {
    container.innerHTML = `
        ${this.state.selectedLanguages
          .map((item) => `<li style="margin-right: 5px;">${item}</li>`)
          .join("")}
    `;
  };

  this.render();
}
