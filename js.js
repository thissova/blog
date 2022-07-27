let cont = document.querySelector('body')
let darkMode = document.querySelector('.dark-change')
let elements = document.querySelectorAll('.dark-elem')

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active')
    cont.classList.toggle('dark')

    elements.forEach(elem => {
        elem.classList.toggle('theme')
    })
})