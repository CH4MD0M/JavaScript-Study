('use strict');
import './component/nav.js';
import './component/section.js';
import './component/modal.js';
import './component/tab.js';
import './component/slider.js';
import './view/button.js';
import './view/image.js';

//////////////////////////////////////////////////////////////////////////////
// removeEventListener
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  alert('addEventListener: Great! you are reading the heading :D');
};

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//////////////////////////////////////////////////////////////////////////////
/* document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
 */
