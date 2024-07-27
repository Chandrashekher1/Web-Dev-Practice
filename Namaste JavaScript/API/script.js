const API_URL = "https://api.github.com/users/akshaymarch7"

async function handlePromise(){
    
    // fetch funtion return promise and when promise is resolve then it give a response
    // fetch() => Response.json() => jsonValue

    // for handling error use try and catch funtion

    try{
        const data = await fetch(API_URL)
        const jsonValue = await data.json() // json will again return a promise
        console.log(jsonValue);
    }
    catch(err){
        console.log(err);
    }
    
}
handlePromise() 