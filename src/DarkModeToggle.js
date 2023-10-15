class DarkModeToggle {
  isDarkMode = null;
  constructor({ $target }) {
    const $DarkModeToggle = document.createElement("input");
    this.$DarkModeToggle = $DarkModeToggle;
    this.$DarkModeToggle.type = "checkbox";

    $DarkModeToggle.className = "DarkModeToggle";
    $target.appendChild($DarkModeToggle);

    $DarkModeToggle.addEventListener("change", (e) => {
      this.setColorMode(e.target.checked);
    });

    this.initColorMode();
  }
  initColorMode() {
    // media 쿼리들은 window.matchMedia로 감지가능
    // isDarkMode, checkbox 상태 초기화, html attr
    this.isDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches; // true/false
    this.$DarkModeToggle.checked = this.isDarkMode;
    this.setColorMode(this.isDarkMode);
  }

  setColorMode(isDarkMode) {
    document.documentElement.setAttribute(
      "color-mode",
      isDarkMode ? "dark" : "light"
    );
  }
}
