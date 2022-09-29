import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

export default function App({ target }) {
  this.state = {
    searchResult: [],
    selectedLanguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      searchResult: this.state.searchResult,
      selectedIndex: 0,
    });
  };

  const searchInput = new SearchInput({
    target: target,
    onChange: (fetchedLanguages) => {
      this.setState({
        searchResult: fetchedLanguages,
      });
    },
  });

  const suggestion = new Suggestion({
    target: target,
    selectLanguage: (language) => {
      if (!this.state.selectedLanguages.includes(language)) {
        this.state = {
          ...this.state,
          selectedLanguages: [...this.state.selectedLanguages, language],
        };
      }
    },
  });
}
