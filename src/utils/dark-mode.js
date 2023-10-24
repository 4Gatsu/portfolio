const darkMode = () => {
  // List of buttons
  const themeToggleBtns = document.querySelectorAll("#theme__toggle");

  // State current theme
  const theme = localStorage.getItem("theme");

  // On mount (happens on first page visit and every reload)
  theme && document.body.classList.add(theme);

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode"); // Enables light mode
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode"); // And saves it to local storage
    } else {
      localStorage.removeItem("theme"); // Or removes it (darkmode is default)
      document.body.removeAttribute("class");
    }
  };

  // Events
  themeToggleBtns.forEach((btn) =>
    btn.addEventListener("click", handleThemeToggle)
  );
};

export default darkMode;
