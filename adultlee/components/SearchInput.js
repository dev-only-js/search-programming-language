export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement("div");
  this.$element.className = "SearchInput";

  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
            <input class="SearchInput__input" placeholder="검색어를 입력해주세요."value=${this.state}></input>
        `;
  };
  this.render();

  //여기에 onchange 이벤트를 등록합니다.
  this.$element.addEventListener("keyup", (e) => {
    const notKeyArr = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Enter",
    ];
    if (!notKeyArr.includes(e.key)) onChange(e.target.value);
  });
}
