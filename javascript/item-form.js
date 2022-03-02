// Initialize a new ItemsController with currentId set to 0
const itemsController = new itemsController(0);

// Select the New Item Form
const newItemForm = document.querySelector("form");

// Add an 'onsubmit' event listener
newItemForm.addEventListener('submit', (event) => {
    
     // Prevent default action
     event.preventDefault();

    // Select the inputs
    const newBookTitle = document.querySelector('#formInput1');
    const newBookDescription = document.querySelector('#formInput2');
    const newBookAuthor = document.querySelector('#formInput3');
    const newBookPublisher = document.querySelector('#formInput4');
    const newPublicationDate = document.querySelector('#formInput5');
    const newBookPrice = document.querySelector('#formInput6');
    const newBookIsbn = document.querySelector('#formInput7');
    const newBookImage = document.querySelector('#formInput8');
    const newBookPageCount = document.querySelector('#formInput9');


    // Get the values of the inputs
    const title = newBookTitle.value;
    const description = newBookDescription.value;
    const author = newBookAuthor.value;
    const publisher = newBookPublisher.value; 
    const pubDate = newPublicationDate.value;
    const price = newBookPrice.value;
    const isbn  = newBookIsbn.value;
    const pgCount = newBookPageCount.value;
    const image = newBookImage.value;

    
    // Validation code here
    function validateForm() {
        
        if (document.myForm.title.value == "") {
            alert("Please provide the book title");
            document.myForm.title.focus();

            return false;
         }
         if( document.myForm.author.value == "" ) {
            alert( "Please provide the book author!" );
            document.myForm.author.focus();
            return false;
         }
         if( document.myForm.description.value == "" ) {
            alert( "Please provide the product description!" );
            document.myForm.description.focus();
            return false;
         }
         if (document.myForm.publisher.value == "") {
            alert("Please provide the book publisher!");
            document.myForm.publisher.focus();

            return false;
         }
         if( document.myForm.pubDate.value == "" ) {
            alert( "Please provide the publication date!" );
            document.myForm.date.focus();
            return false;
         }

         if( document.myForm.price.value == "" ) {
            alert( "Please provide the book price!" );
            document.myForm.price.focus();
            return false;
         }
         if( document.myForm.pgCount.value == "" ) {
            alert( "Please provide the number of pages!" );
            document.myForm.pgCount.focus();
            return false;
         }
         if( document.myForm.isbn.value == "" ) {
            alert( "Please provide the ISBN!" );
            document.myForm.isbn.focus();
            return false;
         }
         if( document.myForm.image.value == "" ) {
            alert( "Please provide an image!" );
            document.myForm.image.focus();
            return false;
         }

         return( true );
     }
    
    

    // Add the item to the ItemsController
    itemsController.addItem(title, author, price, description, isbn, publisher, pgCount, pubDate, image);

    // Clear the form 
    newBookTitle.value = '';
    newBookDescription.value = '';
    newBookAuthor.value = '';
    newBookPublisher.value = ''; 
    newPublicationDate.value = '';
    newBookIsbn.value = '';
    newBookPrice.value = '';
    newBookImage.value = '';
    newBookPageCount.value = '';  
});