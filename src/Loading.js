class Loading {
  $loading = null;
  data = null;

  constructor({ $target }) {
    const $loading = document.createElement("div");
    this.$loading = $loading;
    console.log("SearchInput created.", this);
    $target.appendChild(this.$loading);

    this.data = {
      show: false,
    };

    this.render();
  }

  show() {
    this.setState({
      show: true,
    });
  }

  hide() {
    this.setState({
      show: false,
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  render() {
    if (this.data.show) {
      this.$loading.innerHTML = `<div class="Loading">
        <p>
        로딩...
        </p>
      </div>`;
    } else {
      this.$loading.innerHTML = "";
    }
  }
}
