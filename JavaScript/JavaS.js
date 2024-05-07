// Basic of java Script

// let, const
// let age = 30;
// age = 31;

// const age = 30;
// age = 31;
// console.log(age);


// Different types of dataTyes like : String, Number, Boolean, null, undefined
//1. Strings
// Concatenation

// const name = "Chandu";
// const age = 30;
// console.log('My name is ' + name  + ' and I am ' +age);

//Template String
// const hello = `My name is ${name} and I am ${age}`
// console.log(hello);

// length of string
// console.log(name.length);
// Different  Operations of Strings : lenght , substring, split, etc.

// console.log(name.split(''));
// console.log(name.substring(0,5));

// 2. Arrays - variables that hold multiple values 

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits = ['apples','oranges','pears'];
// fruits.push('mangoes');
// fruits.unshift('strawberry') // at starting index

// console.log(fruits.indexOf('pears'));
// console.log(fruits);

// 

const person = {
    firstname:'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

person.email= 'Chandu.lx7@gmuial.com'
console.log(person.firstname, person.lastName);
console.log(person.hobbies )