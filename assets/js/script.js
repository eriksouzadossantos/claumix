document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu");
    const nav = document.querySelector("header nav");
    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuBtn.classList.toggle("open");

        // Troca o ícone
        if (menuBtn.classList.contains("open")) {
            menuIcon.className = "fi fi-rr-cross-small"; // ícone de "X"
        } else {
            menuIcon.className = "fi fi-sr-rectangle-list"; // ícone do menu
        }
    });
});