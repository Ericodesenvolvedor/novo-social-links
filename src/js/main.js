const darkModeButton = document.querySelector("#dark-mode__input");

function darkTheme() {
    document.body.classList.toggle("dark");
}

function loadTheme() {
    const darkThemeKey = localStorage.getItem("dark-theme");

    if(darkThemeKey) {
        darkTheme();
    }
}

darkModeButton.addEventListener("change", () => {
    darkTheme();

    const containsDark = document.body.classList.contains("dark");

    localStorage.removeItem("dark-theme");

    if(containsDark) {
        localStorage.setItem("dark-theme", true);
    }
});

loadTheme();