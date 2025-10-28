// Seleciona os elementos do menu
const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.x');
const nav = document.querySelector('header nav');
const ctaButton = document.querySelector('.cta-header');

// Função que verifica se é mobile ou tablet
function isMobileOrTablet() {
  return window.innerWidth <= 1024;
}

// Abre o menu
menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
  closeBtn.style.display = 'block';
  menuBtn.style.display = 'none';
  if (ctaButton) ctaButton.classList.add('active');
  document.body.style.overflow = 'hidden'; // bloqueia rolagem
});

// Fecha o menu
closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'flex';
  if (ctaButton) ctaButton.classList.remove('active');
  document.body.style.overflow = ''; // libera rolagem
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if (isMobileOrTablet()) {
      nav.classList.remove('active');
      closeBtn.style.display = 'none';
      menuBtn.style.display = 'flex';
      if (ctaButton) ctaButton.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// Corrige o estado do menu ao redimensionar a janela
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    nav.classList.remove('active');
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'none';
    if (ctaButton) ctaButton.classList.remove('active');
    document.body.style.overflow = '';
  } else {
    menuBtn.style.display = 'flex';
  }
});

// Estado inicial ao carregar
window.addEventListener('load', () => {
  if (window.innerWidth <= 1024) {
    menuBtn.style.display = 'flex';
  } else {
    menuBtn.style.display = 'none';
  }
});
