const search = document.querySelector('.search');
const btn = document.querySelector('.btn')
const input = document.querySelector('input')

btn.addEventListener('click',() => {
    search.classList.toggle('active')   // toggle is used for expending the search bar and back to its original position by clivking on it
    input.focus()  // focus is used for put pointer on the search bar 
    
})