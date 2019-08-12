//this is  array?
const categories = ['swim', 'lounge', 'apero', 'event'];
//how i set up a filter

//array for the all the divs of photos
const allCardPhotos = document.querySelectorAll('.card-photo');

//variable for the buttons

const swimBtn = document.querySelector('.swimBtn');
const aperoBtn = document.querySelector('.aperoBtn');
const loungeBtn = document.querySelector('.loungeBtn');
const eventBtn = document.querySelector('.eventBtn');

const btnArray = [swimBtn, aperoBtn, loungeBtn, eventBtn];

let selectedFilter = '';
MakeBtnSpecial(swimBtn, 'swim');
MakeBtnSpecial(loungeBtn, 'lounge');
MakeBtnSpecial(aperoBtn, 'apero');
MakeBtnSpecial(eventBtn, 'event');

function MakeBtnSpecial(btn, category) {
  btn.addEventListener('click', () => {
    //loop all photos

    btnArray.forEach(btn => {
      btn.classList.remove('btnActive');
    });
    btn.classList.add('btnActive');

    if (selectedFilter === category) {
      // remove all 'hide' classes from all photos
      allCardPhotos.forEach(photo => {
        photo.classList.remove('hide');
      });

      selectedFilter = '';
    } else {
      selectedFilter = category;
      allCardPhotos.forEach(photo => {
        //if  they have class of swim remove hidden class
        if (photo.classList.contains(category)) {
          photo.classList.remove('hide');
        } else {
          photo.classList.add('hide');
        }
      });
    }
  });
}
