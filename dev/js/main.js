/*===== Variables =====*/
let fmTrigger = document.querySelector('#fm-trigger')
let fmPrice = document.querySelector('#fm-price')
let modal = document.querySelector('#modal')

/*===== Funciones =====*/

let showPrice = () => {
    fmPrice.classList.toggle('is-price-visible')
    modal.classList.toggle('is-modal-visible')
}

/*===== Listeners =====*/


fmTrigger.addEventListener('click', showPrice)
modal.addEventListener('click', showPrice)
