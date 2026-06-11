const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.classList.toggle('menu-open');
});

// დახურე მენიუ ლინკზე დაჭერისას
document.querySelectorAll('.mobile-links a, .mobile-discord').forEach(link => {
  link.addEventListener('click', () => {
    burgerBtn.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});
