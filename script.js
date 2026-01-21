const pages = document.querySelectorAll('.page');
let current = 0;

function updatePages() {
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
  const half = window.innerWidth / 2;

  if (e.clientX > half) {
    // 오른쪽 클릭 → 다음
    if (current < pages.length - 1) {
      current++;
      updatePages();
    }
  } else {
    // 왼쪽 클릭 → 이전
    if (current > 0) {
      current--;
      updatePages();
    }
  }
});

// 초기 상태
updatePages();
