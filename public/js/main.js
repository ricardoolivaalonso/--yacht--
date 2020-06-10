"use strict";

/*===== Variables =====*/
var fmTrigger = document.querySelector('#fm-trigger');
var fmPrice = document.querySelector('#fm-price');
var modal = document.querySelector('#modal');
var filterM = document.querySelectorAll('.filter-mobile__range .filter-form__label');
var filterR = document.querySelector('#fm-r');
/*===== Funciones =====*/

var showPrice = function showPrice() {
  fmPrice.classList.toggle('is-price-visible');
  modal.classList.toggle('is-modal-visible');
};

var showFilter = function showFilter() {
  return filterR.classList.toggle('is-filter-tx');
};
/*===== Listeners =====*/


fmTrigger.addEventListener('click', showPrice);
modal.addEventListener('click', showPrice);
filterM.forEach(function (f) {
  return f.addEventListener('click', showFilter);
});