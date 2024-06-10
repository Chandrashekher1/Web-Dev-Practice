const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()

// function generateJoke(){
//     // fetch the joke api

//     const config = {
//        headers: {
//         'Accept' : 'application/json'
//        }
//     }

//     fetch('https://icanhazdadjoke.com',config)
//     .then((res) => res.json())  // res for response
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })

// }

// In a simple way
 
async function generateJoke(){
    // fetch the joke api

    const config = {
       headers: {
        'Accept' : 'application/json'
       }
    }

    const res = await fetch('https://icanhazdadjoke.com',config)

    const data =await  res.json()
    jokeEl.innerHTML = data.joke 

}