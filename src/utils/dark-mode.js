const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme__toggle");

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  });
};

export default darkMode;
