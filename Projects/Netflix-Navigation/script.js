const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')


open_btn.addEventListener('click', (e) => {

    nav.forEach(function(item) {
        item.classList.add('visible')
    })
})

close_btn.addEventListener('click', (e) =>{
    nav.forEach(function(item) {
        item.classList.remove('visible')
    })
})