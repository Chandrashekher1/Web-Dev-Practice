// const btn = document.getElementById('btn').

// we can't use forEcah loop By taking ID , So we have to use Class

const btn = document.querySelectorAll('.btn')

btn.forEach(button => {
    button.addEventListener('click', function (e) {

        const x = e.clientX
        const y = e.clientY
        
        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft
        const yInside = y-buttonTop

       const circle = document.createElement('span')
       circle.classList.add('circle')
       circle.style.top = yInside + 'px'
       circle.style.left = xInside + 'px'

       this.appendChild(circle)

    })
})