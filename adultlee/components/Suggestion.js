export default function Suggestion({ $target, initialState, onSelect }) {
  this.$element = document.createElement("div");
  this.$element.className = "Suggestion";

  this.state = {
    selectedIndex: 0,
    laguages: initialState,
  };

  this.setLaguages = (laguages) => {
    this.state.laguages = laguages;
    this.render();
  };

  this.setSelectIndex = (number) => {
    this.state.selectedIndex = number;
    this.render();
  };

  $target.appendChild(this.$element);

  this.render = () => {
    const laguages = this.state.laguages;
    if (laguages.length > 0) {
      this.$element.style.display = "block";
      this.$element.innerHTML = `
        <ul>
            ${laguages
              .map((item, index) => {
                return `<li class="${
                  this.state.selectedIndex === index
                    ? "Suggestion__item--selected"
                    : ""
                }" data-index="${index}">${item}</li>`;
              })
              .join("")}
        </ul>
    `;
    } else {
      this.$element.style.display = "none";
    }
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      if (
        -1 < this.state.selectedIndex &&
        this.state.selectedIndex < this.state.laguages.length - 1
      ) {
        this.setSelectIndex(this.state.selectedIndex + 1);
      }
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      if (
        0 < this.state.selectedIndex &&
        this.state.selectedIndex < this.state.laguages.length
      ) {
        this.setSelectIndex(this.state.selectedIndex - 1);
      }
    } else if (e.key === "Enter") {
      onSelect(this.state.laguages[this.state.selectedIndex]);
    }
  });

  this.$element.addEventListener("click", (e) => {
    const $li = e.target.closest("li");

    if ($li) {
      const { index } = $li.dataset;
      try {
        onSelect(this.state.laguages[index]);
      } catch {
        alert("선택할 수 없습니다");
      }
    }
  });
}
