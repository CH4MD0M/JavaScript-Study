/*   
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
*/

/*
// /////////////////////////////////////////
// Element를 추가하는 방법
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it</button>';

// header.prepend(message);
header.append(message);
// header.before(message);
header.after(message);

// /////////////////////////////////////////
// Element를 삭제하는 방법
document.querySelector('.btn--close--cookie').addEventListener('click', () => {
  // message.remove();
  message.parentElement.removeChild();
});

// /////////////////////////////////////////
// 스타일 적용하기
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).height);
console.log(getComputedStyle(message).color);

// getComputedStyle
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// setProperty
document.documentElement.style.setProperty('--color-primary', 'orangered');

// /////////////////////////////////////////
// 속성(Attributes) 가져오기
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
console.log(logo.designer); // -> undefined
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Banklist');
*/
