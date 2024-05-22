// EXAMINE THE DOCUMENT OBJECT

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.links);
// console.log(document.body);
// Change the element of the Html

// console.log(document.all[9]);
// document.all[9].textContent = 'Hello';

// GET ELEMENT BY ID //

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.textContent = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';

// Style the content //

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';


// GET ELEMENT BY CLASS NAME //

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'red';

// we can't give the color all elements by this method // Error
// items.style.backgroundColor = 'grey';

// use for loop for all the elements

// for(var i =0; i<items.length; i++){
//     items[i].style.backgroundColor = 'grey';
// }
// GET ELEMENT BY TAG NAME //

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'red';


// QUERY SELECTOR :  when we have to use only items at a tiem // 

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit');
// submit.value = "SEND";


// TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
// parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// ParentElement 
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// ChildNodes 
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);
// FirstElementChild
// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = 'Hello 1'

// lastChild //
// console.log(itemList.lastChild);

// lastChildElement

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// Previous Sibling
// console.log(itemList.previousSibling);

// PreviousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.background = 'green';

 
// CreateElement // 

// Create a div // 
// var newDiv = document.createElement('div');

// Add class
// newDiv.className = 'hello';

// Add Id
// newDiv.id = 'hello1';

// Add attribute
// newDiv.setAttribute('title','Hello Div');

// Create text node
// var newDivText = document.createTextNode('Hello World');

// add text to div
// newDiv.appendChild(newDivText);

// Push form JS to DOM 
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '25px'
// container.insertBefore(newDiv, h1);


// var button = document.getElementById('button').addEventListener('click',buttonClick);

// function buttonClick(e){
    // Without using (e) //
    // console.log('Button clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';

    // with use of (e) // 
    //  console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);

    // console.log(e.type);
    // console.log(e.clientx);
// }


// runEvent //

// var button = document.getElementById('button').addEventListener('click',runEvent);

// Changing the color with mouse move
var button = document.getElementById('button');
var box = document.getElementById('box');

box.addEventListener('mousemove',runEvent);

function runEvent(e){
    console.log('EVENT TYPE: '+e.type);

    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";

}


