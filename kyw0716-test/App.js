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
  });
}
