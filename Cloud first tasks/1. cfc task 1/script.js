'use strict;'

const modal = document.querySelector('.mainModal')
const overlay = document.querySelector('.customOverlay')
const btnOpenModal = document.querySelector('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')

const openModal = function(){
    modal.classList.remove('hiddenModal')
    overlay.classList.remove('hiddenModal')
}

const closeModal = function(){
    modal.classList.add('hiddenModal')
    overlay.classList.add('hiddenModal')
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)