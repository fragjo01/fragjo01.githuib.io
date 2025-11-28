// Tab switching
function openTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  const buttons = document.querySelectorAll('.tab-btn');
  
  tabs.forEach(tab => tab.classList.remove('active'));
  buttons.forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}

// Project screenshots array
const screenshots = [
  "assets/tennisproject/Screenshot 2025-11-28 at 13.59.51.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 13.59.59.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.00.07.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.00.24.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.00.32.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.00.40.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.00.49.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.00.56.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.01.04.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.01.12.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.01.21.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.01.40.png",
  "assets/tennisproject/Screenshot 2025-11-28 at 14.02.17.png"
];

// Lightbox
let current = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index) {
  current = index;
  lightbox.style.display = "flex";
  lightboxImg.src = screenshots[current];
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextSlide(event) {
  event.stopPropagation();
  current = (current + 1) % screenshots.length;
  lightboxImg.src = screenshots[current];
}

function prevSlide(event) {
  event.stopPropagation();
  current = (current - 1 + screenshots.length) % screenshots.length;
  lightboxImg.src = screenshots[current];
}
