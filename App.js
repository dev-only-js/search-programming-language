import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

import { fetchLanguages } from "./api.js";

export default function App({ target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    // TODO: 구조분해 할당 공부해보기 + 수현이형한테 이거 물어보기
    this.state = {
      // ...this.state,
      // ...nextState,
      fetchedLanguages: nextState.fetchedLanguages
        ? [...nextState.fetchedLanguages]
        : [...this.state.fetchedLanguages],
      selectedLanguages: nextState.selectedLanguages
        ? [...this.state.selectedLanguages, ...nextState.selectedLanguages]
        : [...this.state.selectedLanguages],
    };
    suggestion.setState({
      items: this.state.fetchedLanguages,
      selectedIndex: 0,
    });
  };

  const searchInput = new SearchInput({
    target,
    initialState: "",
    onChange: async (keyword) => {
      if (keyword.length === 0) {
        this.setState({
          fetchedLanguages: [],
        });
      } else {
        const languages = await fetchLanguages(keyword);
        this.setState({
          fetchedLanguages: languages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    target,
    initialState: {
      items: [],
      cursor: 0,
    },
  });
}
