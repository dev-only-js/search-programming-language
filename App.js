import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

import { fetchLanguages } from "./api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  }; //  관리할 변수들입니다.
  // 내가 fetch를 통해서 가져올 언어들, 그리고 내가 선택한 언어들을 의미합니다.

  this.setState = (nextState) => {
    // nextState
    this.state = {
      fetchedLanguages: [...nextState.fetchedLanguages],
      selectedLanguages: [...nextState.selectedLanguages], // 지금은 각각의 값들을 직접 초기화 해줍니다.
    }; // 이거 문법 익히기

    // this.state = {
    //   ...this.state,
    //   ...nextState,
    // }; // 이것의 문법을 익혀야함

    suggestion.setState({
      suggestionIndex: 0,
      items: this.state.fetchedLanguages,
    });
  };

  // 둘다 각각의 인자들에게 값을 넘겨줍니다.
  const searchInput = new SearchInput({
    $target: $target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
          selectedLanguages: [],
        });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages,
          selectedLanguages: [],
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: {
      suggestionIndex: 0,
      items: [],
    },
  });
}
