const menuIcon = document.querySelector(".menu");
const closeIcon = document.querySelector(".x");
const nav = document.querySelector("header nav");
const ctaButton = document.querySelector(".cta-header");
const links = document.querySelectorAll("header nav ul li a");

// Detecta mobile/tablet
function isMobileOrTablet() {
  return window.innerWidth <= 768;
}

// Abre menu
menuIcon.addEventListener("click", () => {
  if (!isMobileOrTablet()) return;
  nav.classList.add("active");
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
  ctaButton.classList.add("active");
});

// Fecha menu
closeIcon.addEventListener("click", () => {
  if (!isMobileOrTablet()) return;
  nav.classList.remove("active");
  menuIcon.style.display = "flex";
  closeIcon.style.display = "none";
  ctaButton.classList.remove("active");
});

// Fecha menu ao clicar em link
links.forEach(link => {
  link.addEventListener("click", () => {
    if (!isMobileOrTablet()) return;
    nav.classList.remove("active");
    menuIcon.style.display = "flex";
    closeIcon.style.display = "none";
    ctaButton.classList.remove("active");
  });
});

// Ajuste ao redimensionar
window.addEventListener("resize", () => {
  if (!isMobileOrTablet()) {
    nav.classList.remove("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "none";
    ctaButton.classList.remove("active");
  } else {
    menuIcon.style.display = "flex";
  }
});
