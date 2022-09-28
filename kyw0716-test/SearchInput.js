import { Fetch } from "./api.js";

export default function SearchInput({ target, onChange }) {
  this.element = document.createElement("form");
  this.element.className = "SearchInput";
  this.element.innerHTML = `
    <input class="SearchInput__input" placeholder="프로그램 언어를 입력하세요."/>
  `;

  target.appendChild(this.element);

  this.element.addEventListener("keyup", async (e) => {
    const keyword = e.target.value;
    if (keyword !== "")
      await Fetch(keyword).then((data) => {
        onChange(data);
      });
  });
}
