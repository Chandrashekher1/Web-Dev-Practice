// Single element
// alert('Form');

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

// Multiple element

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassname('item'));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML ='<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     console.log(e);
//     document.querySelector('#my-form').style.background = '#ccc';

//     document.querySelector('body').classList.add('bg-dark');


// })


// For taking input value

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        // alert('Please fill all required  fileds');   old fashion

        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        // console.log('Success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value
        } : ${emailInput.value}`));

        userList.appendChild(li);

        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    
}



