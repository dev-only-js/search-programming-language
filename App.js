import SearchInput from "./SearchInput.js";

import { fetchLanguage } from "./api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguage: [],
    selectedLanguage: [],
  };

  //   this.setState = () = { // nextState
  //     // todo
  //   };

  const searchInput = new SearchInput({
    $target: $target,
    initialState: "",
    onChange: async (keyword) => {
      const language = await fetchLanguage(keyword);
      console.log(language);
    },
  });
}
