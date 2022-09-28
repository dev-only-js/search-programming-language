export default function SearchInput({ target, initialState, onChange }) {
  this.element = document.createElement("form");
  this.element.className = "SearchInput";
  this.state = initialState;

  target.appendChild(this.element);

  this.render = () => {
    this.element.innerHTML = `
        <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `;
  };
  this.render();

  this.element.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  // 여기서의 e.target이 가리키는 대상 공부해보기 + 수현이형한테 이것도 물어보기
  this.element.addEventListener("keyup", (e) => {
    const disableKey = [
      "ArrowUp",
      "ArrowDown",
      "ArrowRight",
      "ArrowLeft",
      "Enter",
    ];
    if (!disableKey.includes(e.key)) onChange(e.target.value);
  });
}
