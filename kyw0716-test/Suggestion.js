export default function Suggestion({ target, selectLanguage }) {
  this.element = document.createElement("ul");
  this.element.className = "Suggestion";
  this.element.style.display = "none";

  target.appendChild(this.element);

  this.state = {
    searchResult: [],
    selectedIndex: 0,
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
    const searchResult = this.state.searchResult;
    const selectedIndex = this.state.selectedIndex;
    if (searchResult.length > 0) {
      this.element.innerHTML = `
            ${searchResult
              .map((item, index) => {
                const regexp = new RegExp(this.state.currentInput, "ig");
                const language = item.replace(
                  regexp,
                  `<span class="Suggestion__item--matched">$&</span>`
                );
                return `<li class="${
                  selectedIndex === index ? "Suggestion__item--selected" : ""
                }">${language}</li>`;
              })
              .join("")}
        `;
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  };

  window.addEventListener("keyup", (e) => {
    const activateKey = ["ArrowUp", "ArrowDown", "Enter"];
    const lastIndex = this.state.searchResult.length - 1;
    if (activateKey.includes(e.key)) {
      switch (e.key) {
        case "ArrowUp":
          this.setState({
            selectedIndex:
              this.state.selectedIndex === 0
                ? lastIndex
                : this.state.selectedIndex - 1,
          });
          break;
        case "ArrowDown":
          this.setState({
            selectedIndex:
              this.state.selectedIndex === lastIndex
                ? 0
                : this.state.selectedIndex + 1,
          });
          break;
        case "Enter":
          selectLanguage(this.state.searchResult[this.state.selectedIndex]);
          break;
      }
    }
  });

  this.element.addEventListener("click", (e) => {
    selectLanguage(
      e.target.innerHTML
        .replace(/\<span class=\"Suggestion\_\_item\-\-matched\"\>/g, "")
        .replace(/\<\/span\>/g, "")
    );
  });

  this.render();
}
