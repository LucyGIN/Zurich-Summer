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
  if (value === './icons/outline-menu-24px.svg') {
    // change burger to x
    menuBtn.src = './icons/outline-clear-24px.svg';
  } else {
    menuBtn.src = './icons/outline-menu-24px.svg';
  }
  navlist.classList.toggle('hidden');
  body.classList.toggle('noScroll');
});

//trying to add nav background
window.onscroll = () => {
  const navigationBar = document.querySelector('nav');
  if (this.scrollY <= 10) navigationBar.className = '';
  else navigationBar.className = 'scroll';
};

//add javascript here for my small card, will this work?
//set my variables

//const cardSmall = document.querySelector('.card-photo-sm');
//const linkBtn = document.querySelector('.linkBtn-SM');
//const cardLarge = document.querySelector('.card-photo-lg');

//add a click function
//display New Card

//linkBtn.addEventListener('click', () => {
//linkBtn.classList.toggle('card-photo-lg');
//});
