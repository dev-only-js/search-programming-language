const Max_display_count = 5;

export default function SelectedLanguage({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "SelectedLanguage";

  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > Max_display_count) {
      const startPosition = this.state.length - Max_display_count;
      this.state = this.state.slice(
        startPosition,
        startPosition + Max_display_count
      );
    }
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `<ul>
            ${this.state
              .map(
                (item) =>
                  `<li>
                ${item}    
            </li>`
              )
              .join("")}
        </ul>`;
  };

  this.render();
}
