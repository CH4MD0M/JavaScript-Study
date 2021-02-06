// Lazy images 로딩
const imgTargets = document.querySelectorAll('img[data-src]');
// console.log(imgTargets); // Array

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace 저해상도 이미지 -> 고해상도 이미지
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgOption = { root: null, threshold: 0, rootMargin: '-200px' };

const imgObserver = new IntersectionObserver(loadImg, imgOption);

imgTargets.forEach(img => imgObserver.observe(img));
