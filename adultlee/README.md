# 프로그래머스의 프로그래밍 언어 검색 문제 풀이

## 각 페이지별 개발 순서를 정리합니다.

- html 기본 파일 부터 생성 (Link 태그 로부터 CSS 파일을 받음) , Body 태그의 최하단에는 script 태그를 통해서 js 파일을 읽어냄
- html 파일에서 불러들이는 index.js 파일 작성 (new App을 통해 App.js로 이어집니다)
- App.js 는 일반적으로 모든 기능이 종합적으로 사용되는 장소입니다. 간단하게 구현후 SearchInput 태그를 구현합니다.
- SearchInput , Suggstion, SelectedLaguages 모두 Componet 로서 기능하므로 폴더를 /Compontnt 에 명시하고 아래에 추가합니다.
- SearchInput 태그를 구현합니다. 초기에는 연결되는 값들이 필요없지만 main 태그아래에 연결되어야만 합니다.
- 차후 SearchInput Component 에서는 onChange 함수를 인자로 받아서 api를 호출받아야 합니다.
- 이때 onChange 이벤트는 keyup 으로 받습니다.
- api 를 호출하는 페이지를 함수로서 구현합니다. fetch로 구현하며 이때 확장성을 높일 수 있도록 request를 따로 분리합니다. fetch로 값을 받는 경우 결과가 바로 return 되는 것이 아니므로 json()함수를 통해서 받아야 합니다.
- api를 onChange를 통해서 searchInput 값이 변동될때 호출되도록 설정합니다.
- 호출한 결과를 fetchedLaguages에 저장합니다.
- 해당 fetchedLaguages를 출력하는 Suggestion 컴포넌트를 개발합니다.
- Suggestion 컴포넌트에서는 받은 값들을 나열해야 하며 내가 지금 선택한 keyup event를 통해서 요소를 이동해야 하고 그때 마다 id를 변경해 주어야 하므로 SelectedId를 추가합니다.
- 여기에 추가로 Click 이벤트를 추가합니다. 이때는 해당 컴포넌트를 element로 받아서 해당 요소와 가장 가까운 li태그를 받습니다. 그 후 해당 태그의 data-index 즉 데이타 셋을 통해서 값을 확인해야합니다.
- 값을 확인 받았다면 keyup event중 enter이벤트를 받습니다.
- enter event가 있었다면 해당 suggestion 컴포넌트에 인자로 넘겨 받은 onSelect함수를 통해서 selectedLaguages를 구현합니다.
- 마찬가지로 SelectedLaguages 컴포넌트를 개발합니다.
