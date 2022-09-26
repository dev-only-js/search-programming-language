export default function SearchInput({ $target, initialState }) {
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.state = initialState;

  console.log(this.$element);

  console.log($target); // target을 못받는 문제 발생,
  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__Input" type="text" placeholder = "프로그래밍 언어를 입력하세요" value="${this.state}">`;
  };

  this.render();
}
