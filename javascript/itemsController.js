import { bookInventory } from "../datasource/books.js";

class ProductsController {
  constructor(items) {
    this.items = [];
  }
}

let newBook = new ProductsController();

console.log(newBook);

window.addEventListener("load", (event) => {
  console.log(bookInventory[1]);
  createCard(bookInventory);
});

function createCard(books) {
  let i = 0;
  for (i; i < 4; i++) {
    //This creates the html elements//
    const cardContainer = document.createElement("div");
    const card = document.createElement("div");
    const bookCoverLink = document.createElement("a");
    const bookCover = document.createElement("img");
    const bookTitle = document.createElement("a");
    const bookPrice = document.createElement("h6");
    const buyNowBtn = document.createElement("button");
    const addCartBtn = document.createElement("button");

    //assigning class attributes to each html element created//
    cardContainer.className = "container-bookCards";
    card.className = "card";
    bookPrice.className = "bookPrice";

    //assigning multiple attributes to each html element created//
    Object.assign(bookCoverLink, {
      className: "book-image",
      href: "#",
      name: books[i].isbn,

    });
    Object.assign(bookCover, {
      src: books[i].image,
      className: "bookImg",
    });
    Object.assign(bookTitle, {
      href: "#",
      className: "bookTitle",
    });
    Object.assign(buyNowBtn, {
      type: "button",
      className: "buyNowBtn purchaseButton",
    });
    Object.assign(addCartBtn, {
      type: "button",
      className: "addCartBtn purchaseButton",
    });

    //populate title and price text on html element created//
    bookTitle.innerHTML = books[i].title;
    bookPrice.innerHTML = books[i].price;
    buyNowBtn.innerHTML = "Buy Now";
    addCartBtn.innerHTML = "Add to Cart";

    bookCoverLink.addEventListener("click", myFunction);

    //organizing the html created in JS according to card template on books.html file//
    const startingNode = document.querySelector(".product-display");
    startingNode.appendChild(cardContainer);
    cardContainer.appendChild(card);
    card.appendChild(bookCoverLink);
    bookCoverLink.appendChild(bookCover);
    card.appendChild(bookTitle);
    card.appendChild(bookPrice);
    card.appendChild(buyNowBtn);
    card.appendChild(addCartBtn);
  }
}

// Begin product.html JS //

//This creates the html elements//

function productInfo() {
  const productGridContainer = document.createElement("div");
  const productVisual = document.createElement("div");
  const productVisualImage = document.createElement("div");
  const bookImgCloseup = document.createElement("img");
  const productButtonContainer = document.createElement("div");
  const productButton = document.createElement("div");
  const productAdd = document.createElement("button");
  const prodButtonTwo = document.createElement("div");
  const wishlistButton = document.createElement("button");
  const productInfo = document.createElement("div");
  const bookName = document.createElement("h5");
  const authorName = document.createElement("h6");
  const productPrice = document.createElement("p");
  const productDetails = document.createElement("p");
  const productDescription = document.createElement("p");
  const productISBN = document.createElement("h6");
  const productPublisher = document.createElement("h6");
  const productPageCount = document.createElement("h6");
  const productPublicationDate = document.createElement("h6");

  // assigning class attributes to each html element created //

  productGridContainer.className = "product-grid-container";
  productVisual.className = "product-visual";
  productVisualImage.className = "product-visual-image";

  Object.assign(bookImgCloseup, {
    src: "",
    className: "bookimg-closeup",
  });

  productButtonContainer.className = "prod-button-container";
  productButton.className = "prod-button";

  Object.assign(productAdd, {
    type: "button",
    className: "product-add general-button",
  });

  prodButtonTwo.className = "prod-button";

  Object.assign(wishlistButton, {
    type: "button",
    className: "wishlist-add wishlistButton general-button",
  });

  productInfo.className = "product-info";
  bookName.className = "book-name";
  authorName.classname = "book-author";
  productPrice.className = "product-price";
  productDetails.className = "product-details";
  productDescription.className = "product-desc";
  productISBN.className = "prod-gen product-isbn";
  productPublisher.className = "prod-gen product-publisher";
  productPageCount.className = "prod-gen product-page-count";
  productPublicationDate.className = "prod-gen product-publication-date";

  //populate text on created html elements//

  productAdd.innerHTML = "Add to Cart";
  wishlistButton.innerHTML = "+ Wishlist";
  bookName.innerHTML = "Book Name";
  bookAuthor.innerHTML = "Author's Name";
  productPrice.innerHTML = "$$Price";
  productDetails.innerHTML = "Product Details";
  productDescription.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat magni minus dolores, ab eveniet aut, architecto dolorum nihil atque officiis commodi necessitatibus distinctio consequuntur laudantium quisquam possimus libero quae eos?";
  productISBN.innerHTML = "ISBN #";
  productPublisher.innerHTML = "Publisher's Name";
  productPageCount.innerHTML = "Page Count:";
  productPublicationDate.innerHTML = "Publication Date:";

  // organizing the html created in JS according to page template on product.html //

  const productStartingNode = document.querySelector(".product-grid-container");
  productStartingNode.appendChild(productVisual);
  productVisual.appendChild(productVisualImage);
  productVisualImage.appendChild(bookImgCloseup);
  productButtonContainer.appendChild(productButton);
  productButton.appendChild(productAdd);
  productButtonTwo.appendChild(wishlistButton);
  productStartingNode.appendChild(productInfo);
  productInfo.appendChild(bookName);
  productInfo.appendChild(bookAuthor);
  productInfo.appendChild(productPrice);
  productInfo.appendChild(productDetails);
  productInfo.appendChild(productDescription);
  productInfo.appendChild(productISBN);
  productInfo.appendChild(productPublisher);
  productInfo.appendChild(productPageCount);
  productInfo.appendChild(productPublicationDate);
}

function myFunction() {
   
  const isbn = this.getAttribute("name");

  bookInventory.forEach(book => {

    if (isbn === book.isbn){

      const index = bookInventory.indexOf(book);

      console.log(index)
    }
    
  });
}