import SearchInput from "./SearchInput.js";

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
    console.log(this.state.searchResult);
  };

  const searchInput = new SearchInput({
    target: target,
    onChange: (fetchedLanguages) => {
      this.setState({
        searchResult: fetchedLanguages,
      });
    },
  });
}
