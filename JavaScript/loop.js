const todos =[
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{id: 2,
    text: 'Meeting wiht boss',
    isCompleted: true
},

{    id: 3,
    text: 'Dentist appt',
    isCompleted: false
}
];

// for loop
// for(let i =0 ; i<= 10; i++){
    // console.log(i);
    // console.log(`For loop Number:${i}`);
// }
// for(let j = 0; i<todos.length;i++){
//     console.log(j);
// }

// for(let todo of todos){
//     console.log(todo.text);

// }
// while loop
// let i = 0;
// while(i<10){
//     console.log(`while Loop Number :${i}`);

//     i++;
// }


// forEach , map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

// map
// const todoText = todos.map(function(todo){
//     return todo.text;
// })
// console.log(todoText);

// filter
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// condition loop

const x = 30;
if(x === 30){
    console.log('X is 30');
}
else if(x>10){
    console.log('X is less than 10');
}
else{
    console.log('X is greater than 10');
}
// ternary operator
const y = 10;
const color = y > 10 ? 'red' : 'blue';
 
// switch case

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;   
    default:
        console.log('Color is not red or blue');
        break;        
}
