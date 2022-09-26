export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement("div");
  this.$element.className = "SearchInput";

  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `<input class="SearchInput__Input" type="text"  placeholder="검색어를 입력하세요" value=${this.state}></input>`; // input을 닫지 않아도 괜찮다. 왜인지는 모르겠음
  };

  this.render();
  const SearchInput = document.querySelector(".SearchInput__Input"); // .을 사용해 주어야 한다.
  SearchInput.addEventListener("keyup", (e) => onChange(e.target.value));
}
// addEventListener
// 두개의 인자로 이루어져 있으며
// 앞의 인자는 입력받는 event 의 속성을 담당, 그리고 두번째는 그 감지한 event가 있을때 실행시키는 함수 이다.
