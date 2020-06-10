"use strict";

/*===== Variables =====*/
var fmTrigger = document.querySelector('#fm-trigger');
var fmPrice = document.querySelector('#fm-price');
var modal = document.querySelector('#modal');
var filterM = document.querySelectorAll('.filter-mobile__range .filter-form__label');
var filterR = document.querySelector('#fm-r');
var yArrow = document.querySelectorAll('.yacht__arrow');
var i = 0;
/*===== Funciones =====*/

var showPrice = function showPrice() {
  fmPrice.classList.toggle('is-price-visible');
  modal.classList.toggle('is-modal-visible');
};

var showFilter = function showFilter() {
  return filterR.classList.toggle('is-filter-tx');
};

var changeSlider = function changeSlider(e) {
  var parent = e.target.parentElement.parentElement.children[0];
  var imgs = parent.querySelectorAll('.yacht__img');

  if (i < imgs.length) {
    imgs.forEach(function (i) {
      return i.style.display = "none";
    });
    imgs[i].style.display = "block";
    i++;
  }

  if (i == 2) i = 0;
};
/*===== Listeners =====*/


fmTrigger.addEventListener('click', showPrice);
modal.addEventListener('click', showPrice);
filterM.forEach(function (f) {
  return f.addEventListener('click', showFilter);
});
yArrow.forEach(function (y) {
  return y.addEventListener('click', changeSlider);
});