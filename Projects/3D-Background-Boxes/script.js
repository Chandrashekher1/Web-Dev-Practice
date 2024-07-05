const btn = document.getElementById('btn')
const boxes = document.getElementById('boxes')
const len = 16

btn.addEventListener('click', () => {
    boxes.classList.toggle('big')
})


function createBoxes(){
    for(let i = 0; i< 4; i++){
        for(let j =0; j< 4; j++){
            const div = document.createElement('div')
            div.classList = "box"
            boxes.appendChild(div)
            div.style.backgroundPosition = `${-j *125}px ${-i * 125}px`
            boxes.appendChild(div)
        
        }
    }
}

createBoxes()