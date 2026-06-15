var toggle = document.getElementById("dark-mode-toggle");
var moonIcon = document.getElementById("icon-moon");
var sunIcon = document.getElementById("icon-sun");
var darkTheme = document.getElementById("dark-mode-theme");
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

toggle.addEventListener("click", function() {
    var current = localStorage.getItem("dark-mode-storage") || "light";
    setTheme(current === "light" ? "dark" : "light");
});

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);
    if (mode === "dark") {
        darkTheme.disabled = false;
        moonIcon.style.display = "none";
        sunIcon.style.display = "";
    } else {
        darkTheme.disabled = true;
        moonIcon.style.display = "";
        sunIcon.style.display = "none";
    }
}
