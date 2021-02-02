import { elements } from './base.js';
const btnScrollTo = document.querySelector('.btn--scroll-to');

///////////////////////////////////////
// 버튼 스크롤링
btnScrollTo.addEventListener('click', function (e) {
  //   const s1coords = elements.section1.getBoundingClientRect();
  elements.section1.scrollIntoView({ behavior: 'smooth' });
});
