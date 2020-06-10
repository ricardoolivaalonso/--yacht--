/*===== Variables =====*/
let fmTrigger = document.querySelector('#fm-trigger')
let fmPrice = document.querySelector('#fm-price')
let modal = document.querySelector('#modal')
let filterM = document.querySelectorAll('.filter-mobile__range .filter-form__label')
let filterR = document.querySelector('#fm-r')

/*===== Funciones =====*/
let showPrice = () => {
    fmPrice.classList.toggle('is-price-visible')
    modal.classList.toggle('is-modal-visible')
}
let showFilter = () => filterR.classList.toggle('is-filter-tx')
/*===== Listeners =====*/
fmTrigger.addEventListener('click', showPrice)
modal.addEventListener('click', showPrice)
filterM.forEach( f => f.addEventListener('click', showFilter) );
