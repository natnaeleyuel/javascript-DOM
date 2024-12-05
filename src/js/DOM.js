const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// form eventlistener
form.addEventListener('submit', addItem);

// itemlist eventlistener
itemList.addEventListener('click', removeItem)

// add item
function addItem(e){
    e.preventDefault();    // the normal submission of the form not to happen

    // get input value
    const newItem = document.getElementById('item').value;

    // create new li element
    const li = document.createElement('li');

    // add class name
    li.className = 'list-group-item'

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button element
    const deleteBtn = document.createElement('button');

    // add class name to the del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // append text node 
    deleteBtn.appendChild(document.createTextNode('X'));

    // append del button to the list
    li.appendChild(deleteBtn)

    // add new create list to the ul list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
  
  // Filter Items
  function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }