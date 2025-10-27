const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-menu') || document.querySelector('.x');
const nav = document.querySelector('header nav');

function abrirMenu() {
  if (!nav) return;
  nav.classList.add('active');
  if (menuBtn) menuBtn.style.display = 'none';
  if (closeBtn) closeBtn.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function fecharMenu() {
  if (!nav) return;
  nav.classList.remove('active');
  if (closeBtn) closeBtn.style.display = 'none';
  if (menuBtn) menuBtn.style.display = 'flex';
  document.body.style.overflow = '';
}

if (menuBtn) menuBtn.addEventListener('click', abrirMenu);
if (closeBtn) closeBtn.addEventListener('click', fecharMenu);

document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', fecharMenu);
});
