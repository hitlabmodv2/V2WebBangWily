
// Text rotation effect - ganti kata setiap 10 detik
const typing = document.getElementById("typing");
const texts = [
  "🤖 Script Bot WhatsApp GRATIS tersedia disini!",
  "⚡ Auto Reaction Story dengan fitur canggih & mudah digunakan", 
  "🎯 Download script premium tanpa bayar, join grup sekarang!",
  "🔥 Bot automation terlengkap - Auto read, react, dan banyak lagi",
  "💎 Source code berkualitas tinggi untuk semua kebutuhan bot",
  "🚀 Script terbaru dengan update rutin dan support 24/7",
  "✨ Fitur auto read story WhatsApp dengan emoji kustom",
  "🎨 Interface modern dan mudah digunakan untuk pemula",
  "🔧 Setup mudah dalam 5 menit tanpa coding ribet",
  "💯 Tested dan terpercaya oleh ribuan pengguna aktif",
  "🌟 Gabung komunitas developer bot WhatsApp terbesar",
  "📱 Compatible dengan semua device Android & iOS",
  "⭐ Rating 5 bintang dari pengguna di seluruh Indonesia",
  "🎁 Bonus script premium dan tutorial lengkap gratis"
];
let textIndex = 0;

function rotateText() {
  if (!typing) return;

  // Ganti text langsung tanpa animasi
  typing.textContent = `${texts[textIndex]}`;
  textIndex = (textIndex + 1) % texts.length;
}

// Spoiler functionality
function toggleSpoiler(id) {
  const content = document.getElementById(id + '-content');
  const arrow = document.getElementById(id + '-arrow');

  if (!content || !arrow) return;

  if (content.classList.contains('open')) {
    content.classList.remove('open');
    arrow.classList.remove('open');
  } else {
    document.querySelectorAll('.spoiler-content').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.spoiler-arrow').forEach(el => el.classList.remove('open'));

    content.classList.add('open');
    arrow.classList.add('open');
  }
}

// Sub-spoiler functionality
function toggleSubSpoiler(id) {
  const content = document.getElementById(id + '-sub-content');
  const arrow = document.getElementById(id + '-sub-arrow');

  if (!content || !arrow) return;

  if (content.classList.contains('open')) {
    content.classList.remove('open');
    arrow.classList.remove('open');
  } else {
    // Close all other sub-spoilers first
    document.querySelectorAll('.sub-spoiler-content').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.sub-spoiler-arrow').forEach(el => el.classList.remove('open'));

    // Open the clicked sub-spoiler
    content.classList.add('open');
    arrow.classList.add('open');
  }
}

// Theme toggle
function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", next);

  // Save theme preference
  localStorage.setItem('theme', next);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);

  // Setup text rotation
  if (typing) {
    typing.textContent = `${texts[0]}`;
    
    // Start rotating text every 10 seconds
    setInterval(rotateText, 10000);
  }

  

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
