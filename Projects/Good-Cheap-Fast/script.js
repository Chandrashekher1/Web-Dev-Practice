const input = document.querySelectorAll('.toggle')

const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const Fast = document.querySelector('#fast')


input.forEach(toggle => 
    toggle.addEventListener('change', (e) =>
        dotheTrick(e.target))
        
)

function dotheTrick(Clicked){
    if(good.checked && cheap.checked && Fast.checked){
        if(good === Clicked){
            Fast.checked = false
        }
        if(cheap === Clicked){
            cheap.checked = false
        }
        if(Fast === Clicked){
            Fast.checked = false
        }
    }
}