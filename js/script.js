// AOS Init
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
  bgm.play().catch(() => console.log("Autoplay diblokir"));
  setTimeout(() => musicToggle.classList.add('show'), 500);
});

musicToggle.addEventListener('click', () => {
  if (bgm.paused) {
    bgm.play();
    musicToggle.innerHTML = '🔊';
  } else {
    bgm.pause();
    musicToggle.innerHTML = '🔇';
  }
});

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

// Scroll to QRIS
function scrollToQris(e) {
  e.preventDefault();
  closeMenu();
  document.getElementById('qris').scrollIntoView({ behavior: 'smooth' });
}

// Gallery Scroll
function scrollGallery(direction) {
  const container = document.querySelector('.gallery-container');
  const scrollAmount = 350;
  container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
}

// Auto-scroll to first image on load
window.addEventListener('load', () => {
  const container = document.querySelector('.gallery-container');
  container.scrollLeft = 0;
});

// Modal Zoom
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

document.querySelectorAll('.gallery-item-large').forEach(img => {
  img.addEventListener('click', function() {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });
});

function closeModal() {
  modal.style.display = "none";
}

// Amplop QRIS
const envelope = document.getElementById('envelope');
const qrisContainer = document.getElementById('qris-container');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('open');
  qrisContainer.style.display = envelope.classList.contains('open') ? 'block' : 'none';
});

// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// RSVP to WhatsApp
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.querySelector('input').value;
  const guests = this.querySelector('select').value;
  const message = this.querySelector('textarea').value || 'Tanpa pesan';
  const waUrl = `https://wa.me/6288801211544?text=Halo,%20saya%20${encodeURIComponent(name)}%20konfirmasi%20kehadiran%20untuk%20${guests}%20orang.%0A%0APesan:%20${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
});
