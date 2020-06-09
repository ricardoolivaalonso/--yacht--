"use strict";

var pEl = document.getElementsByTagName('button');

var preventFunc = function preventFunc(e) {
  return e.preventDefault();
};

for (var i = 0; i < pEl.length; i++) {
  pEl[i].addEventListener('click', preventFunc);
}