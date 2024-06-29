const left = document.getElementById('left')
const right = document.getElementById('right')
const image = document.getElementById('imgs')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run,50000)

function run(){
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length -1){
        idx = 0
    }
    else if(idx < 0){
        idx = img.length-1
    }

    image.style.transform = `translateX(${-idx * 500}px)`
}

function resetImage(){
    clearInterval(interval)
    interval = setInterval(run, 50000)
}
right.addEventListener('click', () => {
    idx++
    changeImage()
    resetImage()
})

left.addEventListener('click', () => {
    idx--
    changeImage()
    resetImage()
    

})