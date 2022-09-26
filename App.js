import SearchInput from "./SearchInput.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguage: [],
    selectedLanguage: [],
  };

  //   this.setState = () = { // nextState
  //     // todo
  //   };

  const searchInput = new SearchInput({ $target, initialState: "" });
}
