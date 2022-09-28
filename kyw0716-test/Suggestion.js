export default function Suggestion({ target }) {
  this.element = document.createElement("ul");
  this.element.className = "Suggestion";
  this.element.style.display = "none";

  target.appendChild(this.element);

  this.state = {
    searchResult: [],
  };

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    const searchResult = this.state.searchResult;
    console.log(searchResult);
    if (searchResult.length > 0) {
      this.element.innerHTML = `
            ${searchResult
              .map((language) => `<li class="">${language}</li>`)
              .join("")}
        `;
      this.element.style.display = "block";
    } else {
      this.element.style.display = "none";
    }
  };

  this.render();
}
