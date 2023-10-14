"use strict";

const showAlert = document.querySelector(".alertOn");
const scrollDown = document.querySelector(".scrollBottom");
const scrollToTop = document.querySelector(".scrollTop");
const addItemEls = document.querySelectorAll(".addItem");
// I created other using onlu querySelector for singling out a value
const addOneItemEls = document.querySelector(".addItem");
const addTwoItemEls = document.querySelector(".addItem2");
const removeItemEls = document.querySelectorAll(".removeItem");
// I created other using onlu querySelector for singling out a value
const removeOneItemEls = document.querySelector(".removeItem");
const removeTwoItemEls = document.querySelector(".removeItem2");
const showCart = document.getElementById("counter");
const localCartQtn = document.getElementById("localCounter");
const local2CartQtn = document.getElementById("localCounter2");

// const scroll = function () {
//     const height = document.body.scrollHeight;
//     window.scroll(0, height);
//   }
let cartValue = 0;
let localCartValue = 0;
let localCartValue2 = 0;

showAlert.addEventListener("click", function () {
  alert("Welcome");
});

scrollDown.addEventListener("click", function () {
  const height = document.body.scrollHeight;
  window.scroll(0, height);
});

scrollToTop.addEventListener("click", function () {
  const height = document.body.scrollHeight;
  window.scroll(height, 0);
});

//  increase value in cart
addItemEls.forEach(function (addItemEl) {
  addItemEl.addEventListener("click", function () {
    cartValue = cartValue + 1;
    showCart.textContent = cartValue;
  });
});

//  decrease value in cart
removeItemEls.forEach(function (removeItemEl) {
  removeItemEl.addEventListener("click", function () {
    if (cartValue > 0) {
      cartValue = cartValue - 1;
      showCart.textContent = cartValue;
    }
  });
});

//  for local element 1

addOneItemEls.addEventListener("click", function () {
  localCartValue = localCartValue + 1;
  localCartQtn.textContent = localCartValue;
});
removeOneItemEls.addEventListener("click", function () {
  if (localCartValue > 0) {
    localCartValue = localCartValue - 1;
    localCartQtn.textContent = localCartValue;
  }
});

// for  local element 2
addTwoItemEls.addEventListener("click", function () {
  localCartValue2 = localCartValue2 + 1;
  local2CartQtn.textContent = localCartValue2;
});
removeTwoItemEls.addEventListener("click", function () {
  if (localCartValue2 > 0) {
    localCartValue2 = localCartValue2 - 1;
    local2CartQtn.textContent = localCartValue2;
  }
});
