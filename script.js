/* global document, window */
document.getElementById('year').textContent = new Date().getFullYear();

// Tab switching: openTab(tabId, element)
function openTab(tabId, el) {
  // hide all tab-content
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(t => t.classList.remove('active'));

  // deactivate nav buttons
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

  // activate requested
  const node = document.getElementById(tabId);
  if (node) node.classList.add('active');

  if (el) el.classList.add('active');

  // scroll top of main for better UX
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Lightbox handling */
const screenshots = [
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2013.59.51.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2013.59.59.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.00.07.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.00.24.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.00.32.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.00.40.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.00.49.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.00.56.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.01.04.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.01.12.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.01.21.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.01.40.png",
  "assets/tennisprojects/Screenshot%202025-11-28%20at%2014.02.17.png"
];

let current = 0;
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.getElementById('lightboxImage');

function openLightbox(index) {
  current = index;
  lightboxImage.src = screenshots[current];
  lightbox.style.display = 'flex';
  lightbox.setAttribute('aria-hidden','false');
  // prevent page scroll
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  if (e) e.stopPropagation();
  lightbox.style.display = 'none';
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow = '';
}

function nextSlide(e) {
  if (e) e.stopPropagation();
  current = (current + 1) % screenshots.length;
  lightboxImage.src = screenshots[current];
}

function prevSlide(e) {
  if (e) e.stopPropagation();
  current = (current - 1 + screenshots.length) % screenshots.length;
  lightboxImage.src = screenshots[current];
}

// Keyboard support
document.addEventListener('keydown', function(ev){
  if (lightbox.style.display === 'flex') {
    if (ev.key === 'ArrowRight') nextSlide();
    if (ev.key === 'ArrowLeft') prevSlide();
    if (ev.key === 'Escape') closeLightbox();
  }
});
