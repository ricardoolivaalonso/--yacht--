"use strict";

/*===== Variables =====*/
var fmTrigger = document.querySelector('#fm-trigger');
var fmPrice = document.querySelector('#fm-price');
var modal = document.querySelector('#modal');
/*===== Funciones =====*/

var showPrice = function showPrice() {
  fmPrice.classList.toggle('is-price-visible');
  modal.classList.toggle('is-modal-visible');
};
/*===== Listeners =====*/


fmTrigger.addEventListener('click', showPrice);
modal.addEventListener('click', showPrice);