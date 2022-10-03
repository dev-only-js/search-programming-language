import search from "./search.js";
import selected from "./selected.js";
import suggestion from "./suggestion.js";

const API_END_POINT = `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev`;

export default function App({ target }) {
  this.state = {
    searchResult: [],
    selectedLanguages: [],
    currentInput: "",
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };

    Suggestion.setState({
      cursor: 0,
      searchResult: this.state.searchResult,
    });
    Selected.setState({
      languages: this.state.selectedLanguages,
    });
  };

  this.setSelectedLanguages = (language) => {
    if (!this.state.selectedLanguages.includes(language)) {
      let languagesQueue = [...this.state.selectedLanguages, language];
      if (languagesQueue.length > 5) languagesQueue.shift();
      this.state = {
        ...this.state,
        selectedLanguages: languagesQueue,
      };
    }
    Selected.setState({
      languages: this.state.selectedLanguages,
    });
  };

  this.setCurrentInput = (input) => {
    this.state = {
      ...this.state,
      currentInput: input,
    };
    Suggestion.setState({
      currentInput: this.state.currentInput,
    });
  };

  const Selected = new selected({
    target: document.querySelector(".SelectedLanguage"),
  });

  const Search = new search({
    target: target,
    onChange: async (input) => {
      if (input.length > 0)
        await fetch(`${API_END_POINT}/languages?keyword=${input}`)
          .then((res) => {
            if (res.ok) return res.json();
          })
          .then((data) => {
            this.setState({
              searchResult: data,
            });
          });
      else this.setState({ searchResult: [] });
    },
    setCurrentInput: this.setCurrentInput,
  });

  const Suggestion = new suggestion({
    target: document.querySelector(".Suggestion"),
    setSelectedLanguages: this.setSelectedLanguages,
    currentInput: this.state.currentInput,
  });
}
