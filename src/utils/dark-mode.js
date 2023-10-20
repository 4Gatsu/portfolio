const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme__toggle");
  // the theme is not saved
  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  });
};

export default darkMode;
