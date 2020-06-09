let pEl = document.getElementsByTagName('button')

let preventFunc = (e) => e.preventDefault()

for (var i = 0; i < pEl.length; i++) 
    pEl[i].addEventListener('click', preventFunc)
