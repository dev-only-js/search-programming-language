import SearchInput from "./SearchInput.js";
import Suggestion from "./Suggestion.js";

import { fetchLanguages } from "./api.js";
import SelectedLanguages from "./SelectedLanguages.js";

export default function App({ target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    selectedIndex: 0,
  };

  this.setState = (nextState) => {
    // TODO: 구조분해 할당 공부해보기
    this.state = {
      ...this.state,
      ...nextState,
      // fetchedLanguages: nextState.fetchedLanguages
      //   ? [...nextState.fetchedLanguages]
      //   : [...this.state.fetchedLanguages],
      // selectedLanguages: nextState.selectedLanguages
      //   ? [...this.state.selectedLanguages, ...nextState.selectedLanguages]
      //   : [...this.state.selectedLanguages],
      // selectedIndex: nextState.selectedIndex
      //   ? nextState.selectedIndex
      //   : this.state.selectedIndex,
    };
    suggestion.setState({
      items: this.state.fetchedLanguages,
      selectedIndex: 0,
    });
    selectedLanguage.setState({
      selectedLanguages: this.state.selectedLanguages,
    });
  };

  const selectedLanguage = new SelectedLanguages({
    initialState: {
      selectedLanguages: [],
    },
  });

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
    },
    handleSelectLanguage: (selectedLanguage) => {
      if (
        !this.state.selectedLanguages.includes(selectedLanguage) &&
        selectedLanguage !== ""
      ) {
        this.setState({
          ...this.state,
          selectedLanguages:
            this.state.selectedLanguages.length === 5
              ? [...this.state.selectedLanguages.splice(1, 4), selectedLanguage]
              : [...this.state.selectedLanguages, selectedLanguage],
        });
      }
    },
  });
}
