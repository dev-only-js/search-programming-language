export default function Suggestion({ $target, initialState }) {
  this.$element = document.createElement("div"); // 해당 컴포넌트가 생성하여 태그 만들기
  this.$element.className = "Suggestion"; // 태그 이름 설정

  //this.state = initialState; // ? 정확히 이해하지 못함 ,

  this.state = {
    suggestionIndex: 0,
    items: initialState.items,
  };

  $target.appendChild(this.$element); // 현재 body 태그에 해당 div 태그를 넣어준다.

  this.setState = (nextState) => {
    // 초기화 하는 함수 마련
    this.state = nextState; // 여기까지만 작성시했었음
    this.render(); // 꼭 render를 추가해 주어야 한다.
  };

  this.setIndex = (number) => {
    this.state.suggestionIndex = number;
    this.render();
  };

  this.render = () => {
    // 입력받은 값들을 통해서 그려주어야 한다.
    const items = this.state.items; // 해당 값들을 받아준다.
    const selectedIndex = this.state.suggestionIndex;
    console.log(selectedIndex);
    if (items.length > 0) {
      // 그려져야 함
      this.$element.style.display = "block"; // 보이도록 함,
      this.$element.innerHTML = `
        <ul>
          ${items
            .map((item, index) => {
              return `<li  class=${
                selectedIndex === index ? "Suggestion__item--selected" : ""
              } data-index = ${index} >${item}</li>`;
            })
            .join("")}
        </ul>
      `;
    } else {
      this.$element.style.display = "none";
      this.$element.innerHTML = "";
      // 여기선 그려지면 안됨
    }
  };

  this.render();
  // 어떤 태그에 addEventListener를 사용할 것인지 확인해야 한다.
  // 처음에 안되었음 왜인지는 모르겠음
  // 왜 인지 모르겠으나 ㅑ브라우저 상에서 해당 window 객체에 event가 저장되어 새로고침 시에도 남아있는것으로 확인됨
  // 다시 서버를 열어주어야 함
  window.addEventListener("keyup", (e) => {
    if (this.state.items.length > 0) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (
          0 <= this.state.suggestionIndex &&
          this.state.suggestionIndex < this.state.items.length - 1
        ) {
          this.setIndex(this.state.suggestionIndex + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (0 < this.state.suggestionIndex) {
          this.setIndex(this.state.suggestionIndex - 1);
        }
      }
    }
  });

  // 여기서는 addeventListener로 받아 낸다.
}

// export default function Suggestion({ $target, initialState }) {
//   this.$element = document.createElement("div");
//   this.$element.className = "Suggestion";

//   $target.appendChild(this.$element);

//   this.state = initialState;

//   this.setState = (nextState) => {
//     this.state = nextState;
//     this.render();
//   };

//   this.render = () => {
//     const { items = [] } = this.state; // 공부 필요!
//     if (items.length > 0) {
//       this.$element.style.display = "block"; // innerHTML은 대문자다...

//       // 아래의 .map에 대한 출력을 실행 시킬때 조금 헷갈린다면 직점 items.map((item, index) => 'li data-index""') ...을 출력해본다.

//       // map의 리턴값은 다음과 같이 배열형태로 출력되게 된다.
//       console.log(
//         items.map((item, index) => `<li data-index="${index}"> ${item}</li>`)
//       );

//       this.$element.innerHTML = `
//                 <ul>
//                     ${items
//                       .map(
//                         (item, index) =>
//                           `<li data-index="${index}"> ${item}</li>`
//                       )
//                       .join("")}
//                 </ul>
//             `;
//     } else {
//       this.$element.style.display = "none";
//       this.$element.innerHTML = "";
//     }
//   };

//   this.render();
// }
