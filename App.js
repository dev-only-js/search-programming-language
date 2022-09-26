import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

import { fetchLanguages } from "./api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    // nextState
    this.state = {
      fetchedLanguages: [...nextState.fetchedLanguages],
      selectedLanguages: [...nextState.selectedLanguages],
    }; // 이거 문법 익히기

    // this.state = {
    //   ...this.state,
    //   ...nextState,
    // };

    suggestion.setState({
      items: this.state.fetchedLanguages,
    });
  };

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
      items: [],
    },
  });
}
