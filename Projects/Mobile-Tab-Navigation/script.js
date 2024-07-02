const nav1 = document.querySelectorAll('nav ul li')
const contents = document.querySelectorAll('.content')


nav1.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents(){
    contents.forEach(contents => contents.classList.remove('show'))
}

function hideAllItems(){
    nav1.forEach(item => item.classList.remove('active'))
}