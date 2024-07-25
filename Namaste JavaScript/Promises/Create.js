const cart = ["shoes","pants","kurta"]

// const promise = createOrder(cart)  // wriiten orderId

// promise.then(function(orderId){
//     console.log(orderId);
//     // proceedToPayment(orderId)
// })

createOrder(cart)
 .then(function(orderId){
    console.log(orderId);
    return orderId
 })
 .then(function(orderId){
    proceedToPayment(orderId)
 })
 .then(function(paymentInfo){
    console.log(paymentInfo);
 })
 .catch(function(err){
    console.log(err.message);
 })

// producer

function createOrder(cart){

    const pr = new Promise(function(resolve,reject){  // Promise is a constructor which consits funtion resolve and reject
        // createOrder
        // validateCart
        // orderId

        if(!validateCart(cart)){
            const err = new Error("Cart is not valid")
            reject(err)
        }

        // logic for create order

        const orderId = "12345"
        if(orderId){
            resolve(orderId)
        }
    })
    return pr
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful");
    })
}

function validateCart(cart){
    return false
} 