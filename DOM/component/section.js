//////////////////////////////////////////////////////////////////////////////
// 섹션 Reveal 애니메이션
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const revealOption = { root: null, threshold: 0.15 };

const sectionObserver = new IntersectionObserver(revealSection, revealOption);

const allSection = document.querySelectorAll('.section');
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
