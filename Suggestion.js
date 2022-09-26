export default function Suggestion({ $target, initialState }) {
  this.$element = document.createElement("div");
  this.$element.className = "Suggestion";

  $target.appendChild(this.$element);

  console.log(this.$element);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const { items = [] } = this.state;
    console.log(items);
    if (items.length > 0) {
      this.$element.style.display = "block";
      // innerHTML은 대문자다...
      this.$element.innerHTML = ` 
                <ul>
                    ${items
                      .map(
                        (item, index) =>
                          `<li data-index="${index}"> ${item}</li>`
                      )
                      .join("")}
                </ul>
            `;
    } else {
      this.$element.style.display = "none";
      this.$element.innerHTML = "";
    }
  };

  this.render();
}
