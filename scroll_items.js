(function() {
  'use strict';

  // define variables
  const items = document.querySelectorAll('.card-photo');

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top - 150 >= 0 &&
      rect.left >= 0 &&
      rect.bottom - 150 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (let i = 0; i < items.length; i++) {
      if (i <= 2) {
        items[i].classList.add('in-view');
      } else if (isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      }
    }
  }

  // listen for events
  window.addEventListener('load', callbackFunc);
  window.addEventListener('resize', callbackFunc);
  window.addEventListener('scroll', callbackFunc);
})();

//trying to add nav background
window.onscroll = () => {
  const navigationBar = document.querySelector('nav');
  if (this.scrollY <= 10) navigationBar.className = '';
  else navigationBar.className = 'scroll';
};
