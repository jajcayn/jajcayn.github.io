var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", () => {
    if (toggle.className === "nav-item nav-link far fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "nav-item nav-link fas fa-sun") {
        setTheme("light");
    }
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "nav-item nav-link fas fa-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "nav-item nav-link far fa-moon";
    }
}
