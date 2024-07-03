const bg = document.getElementById('background')
const pass = document.getElementById('password')


pass.addEventListener('input', (e) => {
    const input = e.target.value
    const len = input.length
    const blur = 20 - len*2

    bg.style.filter = `blur(${blur}px)`
   
})
