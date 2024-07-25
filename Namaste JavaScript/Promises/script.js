// const cart = ["shoe", "Book", "sliper"]

// createOrder(cart , function(orderId){
//     proceedToPayment(orderId)
// })

// const promise = createOrder(cart)


// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })


// fetch is an API given by websites to fetch api
// ferch return a promise 



const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API)
// promise object are immutable
 
console.log(user);

// user.then(function(data){
//     console.log(data);
// })

