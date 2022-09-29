// 여기에는 import될 여러 요소들이 들어갑니다.
import SearchInput from "./components/SearchInput.js";
import Suggestion from "./components/Suggestion.js";
import { fetchLaguages } from "./api.js";
import SelectedLaguages from "./components/SelectedLaguages.js";

const MAX_NUMBER = 5;

export default function App({ $target }) {
  this.state = {
    fetchedLaguages: [],
    selectedLaguages: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setLaguages(nextState.fetchedLaguages);
    selectedLaguages.setState(nextState.selectedLaguages);
  };
  const searchInput = new SearchInput({
    $target: $target,
    initialState: "",
    onChange: async (keyword) => {
      //항상 async를 추가해 주어야 한다
      if (keyword.length > 0) {
        const languages = await fetchLaguages(keyword);
        this.setState({
          fetchedLaguages: languages,
          selectedLaguages: this.state.selectedLaguages,
        });
      } else {
        this.setState({
          fetchedLaguages: [],
          selectedLaguages: this.state.selectedLaguages,
        });
      }
    },
  });

  const suggestion = new Suggestion({
    $target: $target,
    initialState: this.state.fetchedLaguages,
    onSelect: (laguages) => {
      alert(laguages);

      const nextSelectedLaguages = [...this.state.selectedLaguages];

      const index = nextSelectedLaguages.findIndex(
        (selectedLanguages) => selectedLanguages === laguages
      );

      if (index > -1) {
        nextSelectedLaguages.splice(index, 1);
      }
      nextSelectedLaguages.push(laguages);

      this.setState({
        ...this.state,
        selectedLaguages: nextSelectedLaguages,
      });
    },
  });

  const selectedLaguages = new SelectedLaguages({
    $target: $target,
    initialState: this.state.selectedLaguages,
  });
}
