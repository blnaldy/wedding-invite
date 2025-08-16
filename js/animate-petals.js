// Animasi Bunga Jatuh
const canvas = document.getElementById('petalCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Daftar petal
const petals = [];

// Gambar petal
const petalImg = new Image();
petalImg.src = 'https://cdn.jsdelivr.net/gh/creativetimofficial/tailwind-starter-kit@1.0.0/assets/img/petal.png';

// Buat petal
function createPetal() {
  const x = Math.random() * canvas.width;
  const y = -20;
  const size = Math.random() * 15 + 10;
  const speed = Math.random() * 3 + 1;
  const angle = Math.random() * 360;
  const rotationSpeed = Math.random() * 2 - 1;

  petals.push({
    x, y, size, speed, angle, rotationSpeed,
    img: petalImg
  });
}

// Gambar petal
function drawPetal(petal) {
  ctx.save();
  ctx.translate(petal.x, petal.y);
  ctx.rotate(petal.angle * Math.PI / 180);
  ctx.drawImage(petal.img, -petal.size / 2, -petal.size / 2, petal.size, petal.size);
  ctx.restore();
}

// Update posisi
function updatePetal(petal) {
  petal.y += petal.speed;
  petal.angle += petal.rotationSpeed;
  if (petal.y > canvas.height) {
    petal.y = -20;
    petal.x = Math.random() * canvas.width;
  }
}

// Animasi
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < petals.length; i++) {
    updatePetal(petals[i]);
    drawPetal(petals[i]);
  }
  requestAnimationFrame(animate);
}

// Mulai animasi
for (let i = 0; i < 20; i++) {
  createPetal();
}
animate();

// Tambahkan petal setiap 1 detik
setInterval(() => {
  createPetal();
}, 1000);
