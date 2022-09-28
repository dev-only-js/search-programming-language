export default function Suggestion({
  target,
  initialState,
  handleSelectLanguage,
}) {
  // TODO: let으로 변수 만들어도 되는지, 된다면 왜 굳이 this를 사용한건지 알아보기
  this.element = document.createElement("div");
  this.element.className = "Suggestion";
  target.appendChild(this.element);

  this.state = {
    selectedIndex: 0,
    items: initialState.items,
    currentInput: "",
  };

  this.currentSelectedLanguage = "";

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  window.addEventListener("keyup", (e) => {
    const enableKey = ["ArrowUp", "ArrowDown", "Enter"];
    if (enableKey.includes(e.key)) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      let nextIndex = selectedIndex;
      switch (e.key) {
        case "ArrowUp":
          nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
          break;
        case "ArrowDown":
          nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
          break;
        case "Enter":
          handleSelectLanguage(this.currentSelectedLanguage);
          break;
      }

      this.setState({
        ...this.state,
        selectedIndex: nextIndex,
      });
    }
  });

  this.render = () => {
    const { items = [] } = this.state;
    if (items.length > 0) {
      this.element.style.display = "block";
      this.element.innerHTML = `
            <ul>
                ${items
                  .map((item, index) => {
                    const regexp = new RegExp(
                      `${this.state.currentInput}`,
                      "gi"
                    );
                    // replace 함수 사용시 일치하는 해당 부분을 그대로 사용하고 싶다면 $&를 사용하면 된다.
                    const renderItem = item.replace(
                      regexp,
                      `<span class="Suggestion__item--matched">$&</span>`
                    );
                    if (this.state.selectedIndex === index) {
                      this.currentSelectedLanguage = item;
                    }
                    return `<li class="${
                      this.state.selectedIndex === index
                        ? "Suggestion__item--selected"
                        : ""
                    }">${renderItem}</ul>`;
                  })
                  .join("")}
            </ul>
        `;
    } else {
      this.element.style.display = "none";
      this.element.innerHTML = "";
    }
  };

  this.render();
}
