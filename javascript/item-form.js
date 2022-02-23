// Initialize a new ItemsController with currentId set to 0
const itemsController = new itemsController(0);

// Select the New Item Form
const newItemForm = document.querySelector('#newItemForm');

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    

    // Select the inputs
    const newItemName = document.querySelector('#newItemName');
    const newItemDescription = document.querySelector('#newItemDescription');
    const newItemImageUrl = document.querySelector('#newItemImageUrl');    

    // Get the values of the inputs
    const name = newItemName.value;
    const description = newItemDescription.value;
    const imageUrl = newItemImageUrl.value;

    
    // Validation code here
    function validateForm() {
        let x = document.forms["myForm"]["name"].value;
        if (x == "") {
            alert("Field must be filled out");

                // Prevent default action
                event.preventDefault();

            return false;
         }
     }
    
    

    // Add the item to the ItemsController
    itemsController.addItem(name, description, imageUrl);

    // Clear the form
    newItemName.value = '';
    newItemDescription.value = '';    
});