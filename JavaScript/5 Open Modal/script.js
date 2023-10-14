'use strict';
const mainModal = document.querySelector('.modal');
const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const closeOverlay = document.querySelector('.overlay');

for (let i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', function () {
    mainModal.classList.remove('hiddenModal');
    closeOverlay.classList.remove('hiddenModal');
  });
}
closeModal.addEventListener('click', function () {
  mainModal.classList.add('hiddenModal');
  closeOverlay.classList.add('hiddenModal');
});
closeOverlay.addEventListener('click', function () {
  mainModal.classList.add('hiddenModal');
  closeOverlay.classList.add('hiddenModal');
});
