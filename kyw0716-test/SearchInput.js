import { Fetch } from "./api.js";

export default function SearchInput({ target, onChange, setCurrentInput }) {
  this.element = document.createElement("form");
  this.element.className = "SearchInput";
  this.element.innerHTML = `
    <input class="SearchInput__input" placeholder="프로그램 언어를 입력하세요."/>
  `;
  this.element.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  target.appendChild(this.element);

  this.element.addEventListener("keyup", async (e) => {
    const inActivateKey = ["ArrowUp", "ArrowDown", "Enter"];
    const keyword = e.target.value;

    if (!inActivateKey.includes(e.key)) {
      setCurrentInput(keyword);
      if (keyword !== "")
        await Fetch(keyword).then((data) => {
          onChange(data);
        });
      else onChange([]);
    }
  });
}
