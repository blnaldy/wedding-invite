// Inisialisasi AOS
AOS.init({ once: true, duration: 800, offset: 120 });

// Gate & Audio
const gate = document.getElementById('gate');
const openBtn = document.getElementById('open-btn');
const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('music-toggle');

openBtn.addEventListener('click', () => {
  gate.style.transition = 'opacity 1.2s';
  gate.style.opacity = '0';
  setTimeout(() => gate.remove(), 1200);
  
  bgm.play().catch(e => console.log("Autoplay diblokir"));
  setTimeout(() => musicToggle.classList.add('show'), 500);
});

// Music Toggle
musicToggle.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    musicToggle.innerHTML = '🔊';
  } else {
    bgm.pause();
    musicToggle.innerHTML = '🔇';
  }
});

// Pause when tab hidden
document.addEventListener('visibilitychange', () => {
  if (document.hidden) bgm.pause();
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

// Amplop QRIS
const envelope = document.getElementById('envelope');
const qrisContainer = document.getElementById('qris-container');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  if (envelope.classList.contains('open')) {
    qrisContainer.style.display = 'block';
  } else {
    qrisContainer.style.display = 'none';
  }
});
