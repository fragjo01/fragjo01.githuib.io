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

let current = 0;
const imgEl = document.getElementById("carousel-img");

function nextSlide() {
  current = (current + 1) % screenshots.length;
  imgEl.src = screenshots[current];
}

function prevSlide() {
  current = (current - 1 + screenshots.length) % screenshots.length;
  imgEl.src = screenshots[current];
}
