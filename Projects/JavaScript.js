var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click',removeItem);

// Filter Event
filter.addEventListener('keyup',filterItem);

// Add item
function addItem(e) {
    e.preventDefault();

    console.log('Form submitted'); // Check if this logs

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    console.log(li); // Check if this logs

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li);

}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter(Search) items
function filterItem(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  // var items = itemList.getElementBytagName('li');
  var items = itemList.getElementsByTagName('li');
  //convert to array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}