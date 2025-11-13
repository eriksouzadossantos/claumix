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



// Seleciona os elementos do DOM
const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalSlides = 15; // Número total de slides
let currentSlide = 0; // Índice do slide atual (0 a 14)

// Calcula a porcentagem de deslocamento por slide
const slideWidthPercentage = 100 / totalSlides;

/**
 * Move a trilha (track) do slider para mostrar o slide atual.
 */
function updateSlider() {
  // Calcula o deslocamento. Ex: Se currentSlide for 1, o deslocamento é -6.666%
  const offset = currentSlide * slideWidthPercentage;
  // Aplica a transformação CSS para mover o track para a esquerda
  sliderTrack.style.transform = `translateX(-${offset}%)`;

  // Atualiza o estado dos botões para desabilitá-los nos limites
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

/**
 * Funções de navegação
 */

// Move para o próximo slide
nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++; // Incrementa o índice
    updateSlider(); // Atualiza a exibição
  }
});

// Move para o slide anterior
prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--; // Decrementa o índice
    updateSlider(); // Atualiza a exibição
  }
});

// Chama a função para garantir que o slider inicie no slide 0
updateSlider();