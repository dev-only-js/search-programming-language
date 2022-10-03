export default function suggestion({ target, setSelectedLanguages }) {
  target.style.display = "none";

  this.element = document.createElement("ul");
  target.appendChild(this.element);

  this.state = {
    searchResult: [],
    cursor: 0,
    currentInput: "",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    const regexp = new RegExp(this.state.currentInput, "ig");
    this.element.innerHTML = `
            ${this.state.searchResult
              .map((v, i) => {
                const language = v.replace(
                  regexp,
                  `<span class="Suggestion__item--matched">$&</span>`
                );
                return `<li class="${
                  i === this.state.cursor ? "Suggestion__item--selected" : ""
                }">${language}</li>`;
              })
              .join("")}
        `;
    if (this.state.searchResult.length > 0) target.style.display = "block";
    else target.style.display = "none";
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    const Activate = ["ArrowUp", "ArrowDown", "Enter"];
    if (Activate.includes(e.key)) {
      const lastIndex = this.state.searchResult.length - 1;
      switch (e.key) {
        case "ArrowUp":
          this.setState({
            cursor: this.state.cursor === 0 ? lastIndex : this.state.cursor - 1,
          });
          break;
        case "ArrowDown":
          this.setState({
            cursor: this.state.cursor === lastIndex ? 0 : this.state.cursor + 1,
          });
          break;
        case "Enter":
          setSelectedLanguages(this.state.searchResult[this.state.cursor]);
          break;
      }
    }
  });

  this.element.addEventListener("click", (e) => {
    const regexp1 = new RegExp(
      '<span class="Suggestion__item--matched">',
      "ig"
    );
    const regexp2 = new RegExp("</span>", "ig");
    const selected = e.target.innerHTML
      .replace(regexp1, "")
      .replace(regexp2, "");
    setSelectedLanguages(selected);
  });
}
