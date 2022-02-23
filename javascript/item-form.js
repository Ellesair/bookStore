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
    const newBookDescription = document.querySelector('#formInput3');
    const newBookAuthor = document.querySelector('#formInput2');
    const newBookPublisher = document.querySelector('#formInput10');
    const newPublicationDate = document.querySelector('#formInput5');
    const newBookLength = document.querySelector('#formInput6');
    const newBookWidth = document.querySelector('#formInput11');
    const newBookHeight = document.querySelector('#formInput12');
    const newBookWeight = document.querySelector('#formInput13');
    const newPageSample = document.querySelector('#formInput7');
    const newBookPrice = document.querySelector('#formInput9');
    const newBookCover = document.querySelector('#formInput8');
    const newBookPages = document.querySelector('#formInput4');


    // Get the values of the inputs
    const title = newBookTitle.value;
    const description = newBookDescription.value;
    const author = newBookAuthor.value;
    const publisher = newBookPublisher.value; 
    const date = newPublicationDate.value;
    const length = newBookLength.value; 
    const width = newBookWidth.value;
    const height = newBookHeight.value;
    const weight = newBookWeight.value;
    const sample = newPageSample.value;
    const price = newBookPrice.value;
    const coverType = newBookCover.value;
    const pages = newBookPages.value;

    
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
         if( document.myForm.date.value == "" ) {
            alert( "Please provide the publication date!" );
            document.myForm.date.focus();
            return false;
         }
         if( document.myForm.length.value == "" ) {
            alert( "Please provide the book length!" );
            document.myForm.length.focus();
            return false;
         }
         if (document.myForm.width.value == "") {
            alert("Please provide the book width");
            document.myForm.width.focus();
            return false;

         }
         if( document.myForm.height.value == "" ) {
            alert( "Please provide the book height!" );
            document.myForm.height.focus();
            return false;
         }
         if( document.myForm.weight.value == "" ) {
            alert( "Please provide the book weight!" );
            document.myForm.weight.focus();
            return false;
         }
         if( document.myForm.sample.value == "" ) {
            alert( "Please provide a sample page!" );
            document.myForm.sample.focus();
            return false;
         }
         if( document.myForm.price.value == "" ) {
            alert( "Please provide the book price!" );
            document.myForm.price.focus();
            return false;
         }
         if( document.myForm.coverType.value == "" ) {
            alert( "Please provide the book cover type!" );
            document.myForm.coverType.focus();
            return false;
         }
         /*if( document.myForm.publisher.value == "" || isNaN( document.myForm.Zip.value ) ||
            document.myForm.Zip.value.length != 5 ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus();
            return false;
         }*/
         if( document.myForm.pages.value == "" ) {
            alert( "Please provide the number of pages!" );
            document.myForm.pages.focus();
            return false;
         }
         return( true );
     }
    
    

    // Add the item to the ItemsController
    itemsController.addItem(title, author, description, publisher, date, length, width, height, weight, sample, price, coverType, pages);

    // Clear the form 
    newBookTitle.value = '';
    newBookDescription.value = '';
    newBookAuthor.value = '';
    newBookPublisher.value = ''; 
    newPublicationDate.value = '';
    newBookLength.value = ''; 
    newBookWidth.value = '';
    newBookHeight.value = '';
    newBookWeight.value = '';
    newPageSample.value = '';
    newBookPrice.value = '';
    newBookCover.value = '';
    newBookPages.value = '';  
});