const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.x');
const nav = document.querySelector('header nav');
const ctaButton = document.querySelector('.cta-header');

function isMobileOrTablet() {
  return window.innerWidth <= 1024;
}

menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
  closeBtn.style.display = 'block';
  menuBtn.style.display = 'none';
  if (ctaButton) ctaButton.classList.add('active');
  document.body.style.overflow = 'hidden';
});


closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'flex';
  if (ctaButton) ctaButton.classList.remove('active');
  document.body.style.overflow = '';
});


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

window.addEventListener('load', () => {
  if (window.innerWidth <= 1024) {
    menuBtn.style.display = 'flex';
  } else {
    menuBtn.style.display = 'none';
  }
});





const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalSlides = 15;
let currentSlide = 0;

const slideWidthPercentage = 100 / totalSlides;

function updateSlider() {
  const offset = currentSlide * slideWidthPercentage;
  sliderTrack.style.transform = `translateX(-${offset}%)`;

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === totalSlides - 1;
}

nextBtn.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});
updateSlider();




document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu');
  const xIcon = document.querySelector('.x');
  const navMenu = document.querySelector('header nav');

  if (menuIcon && xIcon && navMenu) {
    menuIcon.addEventListener('click', () => {
      navMenu.classList.add('active');
      menuIcon.style.display = 'none';
      xIcon.style.display = 'block';
    });

    xIcon.addEventListener('click', () => {
      navMenu.classList.remove('active');
      xIcon.style.display = 'none';
      menuIcon.style.display = 'block';
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        xIcon.style.display = 'none';
        menuIcon.style.display = 'block';
      });
    });
  }

  const sliderTrack = document.getElementById('sliderTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const totalSlides = 15;
  let currentSlide = 0;
  const slidesPerView = 1;

  function updateSlider() {
    if (!sliderTrack) return;

    const offset = -currentSlide * (100 / totalSlides);
    sliderTrack.style.transform = `translateX(${offset}%)`;

    if (prevBtn) prevBtn.disabled = currentSlide === 0;
    if (nextBtn) nextBtn.disabled = currentSlide >= totalSlides - slidesPerView;
  }

  if (sliderTrack && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentSlide < totalSlides - slidesPerView) {
        currentSlide++;
        updateSlider();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });

    updateSlider();
  }

  const form = document.getElementById('budgetForm');
  const formMessage = document.getElementById('formMessage');
  const WHATSAPP_NUMBER = '5519991426480';

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const telefone = document.getElementById('telefone').value;
      const email = document.getElementById('email').value;
      const servico = document.getElementById('servico').value;
      const descricao = document.getElementById('descricao').value;

      let message = `*SOLICITAÇÃO DE ORÇAMENTO - CLAU MIX*\n\n`;
      message += `*Nome/Empresa:* ${nome}\n`;
      message += `*Telefone/WhatsApp:* ${telefone}\n`;
      message += `*E-mail:* ${email || 'Não Fornecido'}\n`;
      message += `*Serviço Requerido:* ${servico}\n`;
      message += `*Descrição do Problema:*\n${descricao}\n\n`;
      message += `_Por favor, responda esta mensagem para darmos início ao atendimento._`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

      if (formMessage) {
        formMessage.textContent = 'Redirecionando para o WhatsApp...';
        formMessage.className = 'message success';
      }

      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        form.reset();
        if (formMessage) {
          formMessage.textContent = 'Aguardando confirmação do envio pelo WhatsApp.';
        }
      }, 2000);
    });
  }
});