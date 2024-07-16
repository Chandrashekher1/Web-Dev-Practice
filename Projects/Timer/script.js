const play = document.getElementById('play')
const reset = document.getElementById('reset')
const timer = document.getElementById('timer')
const root = document.querySelector(':root')

// initial setup

const totalSeconds = 60
let playing  = false;
let currentSeconds = totalSeconds;
timer.innerHTML = formatTime(totalSeconds);

// Run the run() function every second

const timeInterval = setInterval(run, 1000)

//Format time

function formatTime(seconds){
    const minutes = Math.floor(seconds / 60)
    const newSeconds = seconds % 60

    return `${minutes.toString().padStart(2, '0')}: ${newSeconds.toString().padStart(2,'0')}`
}

// Event Listener

play.addEventListener('click' , () => {
    playing = !playing

    play.classList.toggle('play')
    play.classList.toggle('bg-green-500')

    const playIcon = play.querySelector('i')
    playIcon.classList.toggle('fa-play')
    playIcon.classList.toggle('fa-pause')
})
reset.addEventListener('click',resetAll)

// Run the timer

function run(){
    if(playing){
        currentSeconds -= 1
        if(currentSeconds <= 10){
            clearInterval(timeInterval)
            resetAll()
        }

        timer.innerHTML = formatTime(currentSeconds)

        root.style.setProperty('--degrees', calDeg())
    }
}

// funtion Calculate degree

function calDeg(){
    return `${360 - (currentSeconds / totalSeconds) * 360}deg`
}

// Reset the time 

function resetAll(){
    playing  = false
    play.classList.remove('play')
    play.classList.remove('bg-green-500')
    const playIcon = play.querySelector('i')
    playIcon.classList.remove('fa-pause')
    playIcon.classList.add('fa-play')

    currentSeconds = totalSeconds
    timer.innerText = formatTime(totalSeconds)
    root.style.setProperty('--degrees', '0deg')
}