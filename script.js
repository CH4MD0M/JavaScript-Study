'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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
