const pages = document.querySelectorAll('.page');
let current = 0;

function isMobile() {
  return window.innerWidth <= 768;
}

function updatePages() {
  if (isMobile()) return;

  pages.forEach((page, index) => {
    page.style.zIndex = pages.length - index;

    if (index < current) {
      page.classList.add('flipped');
    } else {
      page.classList.remove('flipped');
    }
  });
}

window.addEventListener('click', (e) => {
  if (isMobile()) return;

  const half = window.innerWidth / 2;

  if (e.clientX > half && current < pages.length - 1) {
    current++;
  } else if (e.clientX <= half && current > 0) {
    current--;
  }

  updatePages();
});

updatePages();
