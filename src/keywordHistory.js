class KeyWrdHistory {
  $keywordHistory = null;
  data = null;

  constructor({ $target, onSearch }) {
    this.$keywordHistory = document.createElement("ul");
    this.$keywordHistory.className = "keywordHistory";
    $target.appendChild(this.$keywordHistory);

    this.onSearch = onSearch;
    this.init();
    this.render();
  }

  init() {
    const data = this.getHistory();
    this.setState(data);
  }
  addKeyword(keyword) {
    let data = this.getHistory();
    data.unshift(keyword);
    data = data.splice(0, 5);
    localStorage.setItem("keywordHistory", data.join(","));
    this.init();
  }

  getHistory() {
    return localStorage.getItem("keywordHistory").split(",") || [];
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    this.$keywordHistory.innerHTML = this.data
      .map((keyword) => `<li><button>${keyword}</button></li>`)
      .join("");

    this.$keywordHistory.querySelectorAll("li button").forEach(($item, idx) => {
      $item.addEventListener("click", () => {
        this.onSearch(this.data[idx]);
      });
    });
  }
}
