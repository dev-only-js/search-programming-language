import SearchInput from "./SearchInput.js";
import SelectedLanguages from "./SelectedLanguages.js";
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
        let selectedArray = [...this.state.selectedLanguages, language];
        if (selectedArray.length > 5) {
          selectedArray = selectedArray.splice(1, 5);
        }
        this.state = {
          ...this.state,
          selectedLanguages: selectedArray,
        };
        selectedLanguages.setState({
          selectedLanguages: this.state.selectedLanguages,
        });
        console.log(this.state.selectedLanguages);
      }
    },
  });

  const selectedLanguages = new SelectedLanguages({
    target: document.querySelector(".SelectedLanguage"),
  });
}
