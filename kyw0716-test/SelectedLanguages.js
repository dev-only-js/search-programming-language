export default function SelectedLanguages({ target, deleteLanguage }) {
  this.state = {
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    target.innerHTML = `
        ${this.state.selectedLanguages
          .map(
            (item) =>
              `<li style="margin-right: 8px; cursor: pointer;">${item}</li>`
          )
          .join("")}
    `;
  };

  target.addEventListener("click", (e) => {
    console.log(e.target.innerHTML);
    deleteLanguage(e.target.innerHTML);
  });

  this.render();
}
