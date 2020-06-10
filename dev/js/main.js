/*===== Variables =====*/
let fmTrigger = document.querySelector('#fm-trigger')
let fmPrice = document.querySelector('#fm-price')
let modal = document.querySelector('#modal')
let filterM = document.querySelectorAll('.filter-mobile__range .filter-form__label')
let filterR = document.querySelector('#fm-r')
let yArrow = document.querySelectorAll('.yacht__arrow')
let i = 0
/*===== Funciones =====*/
let showPrice = () => {
    fmPrice.classList.toggle('is-price-visible')
    modal.classList.toggle('is-modal-visible')
}

let showFilter = () => filterR.classList.toggle('is-filter-tx')

let changeSlider = (e) => {
    let parent = e.target.parentElement.parentElement.children[0]
    let imgs = parent.querySelectorAll('.yacht__img')

    if ( i < imgs.length ) {
        imgs.forEach( i => i.style.display = "none" );
        imgs[i].style.display = "block"
        i++
    }
    if(i == 2) i = 0
}

/*===== Listeners =====*/
fmTrigger.addEventListener('click', showPrice)
modal.addEventListener('click', showPrice)
filterM.forEach( f => f.addEventListener('click', showFilter) );
yArrow.forEach( y => y.addEventListener('click', changeSlider) );
