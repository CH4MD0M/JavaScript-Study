('use strict');
import './component/nav.js';
import './component/modal.js';
import './view/button.js';
import './component/tab.js';
import './view/image.js';
import { elements } from './view/base.js';

//////////////////////////////////////////////////////////////////////////////
// removeEventListener
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

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
