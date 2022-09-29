export default function selectedLaguages({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "SelectedLanguage";

  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > 5) {
      const startPosition = this.state.length - 5;
      this.state = this.state.slice(startPosition, startPosition + 5);
    }

    this.render();
  };

  this.render = () => {
    const selectedLaguages = this.state;
    if (selectedLaguages.length > 0) {
      this.$element.innerHTML = `
            <ul>
            ${selectedLaguages.map((item) => {
              return `<li>${item}</li>`;
            })}
            </ul>
            `;
    }
  };

  this.render();
}
