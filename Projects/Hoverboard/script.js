const container = document.getElementById('container')

const color = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const square = 500

for(let i =0; i < square ; i++){
    const square1 = document.createElement('div')
    square1.classList.add('square')

    container.appendChild(square1)

    square1.addEventListener('mouseover', () => setColor(square1))

    square1.addEventListener('mouseout', () => removeColor(square1))
}

function getRandomColor(){
    return color[Math.floor(Math.random() * color.length)]
}

function setColor(e){
    const colors = getRandomColor()
    e.style.background = colors
    e.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`
   
}

function removeColor(e){
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}