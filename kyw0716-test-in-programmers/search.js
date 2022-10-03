export default function search({ target, onChange, setCurrentInput }) {
  this.element = document.createElement("form");
  this.element.className = `SearchInput`;

  this.element.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  target.appendChild(this.element);

  this.render = () => {
    this.element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요.">`;
  };

  this.render();

  this.element.addEventListener("keyup", (e) => {
    const Disalbe = [
      "ArrowUp",
      "ArrowDown",
      "Enter",
      "ArrowRight",
      "ArrowLeft",
    ];
    if (!Disalbe.includes(e.key)) {
      onChange(e.target.value);
      setCurrentInput(e.target.value);
    }
  });
}
