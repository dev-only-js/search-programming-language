export default function Suggestion({ target, initialState }) {
  // TODO: let으로 변수 만들어도 되는지, 된다면 왜 굳이 this를 사용한건지 알아보기
  this.element = document.createElement("div");
  this.element.className = "Suggestion";
  target.appendChild(this.element);

  this.state = initialState;
  this.cursor = 0;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.setCursor = (inputKey) => {
    switch (inputKey) {
      case "ArrowUp":
        this.cursor -= 1;
        if (this.cursor < 0) {
          this.cursor += this.state.items.length;
        }
        break;
      case "ArrowDown":
        this.cursor++;
        if (this.cursor >= this.state.items.length) {
          this.cursor -= this.state.items.length;
        }
        break;
    }
  };

  target.addEventListener("keyup", (e) => {
    this.setCursor(e.code);
  });

  this.render = () => {
    const { items = [] } = this.state;
    if (items.length > 0) {
      this.element.style.display = "block";
      this.element.innerHTML = `
            <ul>
                ${items
                  .map(
                    (item, index) =>
                      `<li class="${
                        this.cursor === index
                          ? "Suggestion__item--selected"
                          : ""
                      }">${item}</ul>`
                  )
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
