const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)  // In this we will scroll along X axis , so scroll command is used and one checkBox funtion created

checkBoxes()
function checkBoxes(){
    // console.log();

    const triggerBottom = window.innerHeight / 5*4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })

}
