// find button set it as a variable, CONST,
const button = document.querySelector('.navbutton');
const navlist = document.querySelector('.navlist');
const menuBtn = document.querySelector('.menuIcon');
const body = document.querySelector('body');
//.classList (.add || .remove)

// add a click function
button.addEventListener('click', () => {
  //check button value

  const value = menuBtn.src;
  console.log(value, button);
  //if hamburger show list and make hambuger x
  // button.innerHTML = value === '☰' ? 'x' : '☰';
  // <img class="menuIconX" src="./images/outline-clear-24px.svg" />
  if (value === './images/outline-menu-24px.svg') {
    // change burger to x
    menuBtn.src = './images/outline-clear-24px.svg';
  } else {
    menuBtn.src = './images/outline-menu-24px.svg';
  }
  navlist.classList.toggle('hidden');
  body.classList.toggle('noScroll');
});
