
const itemsController = new ProductsController(0);


function addItemCard(item) {
  const bookHTML =
    '<div class="container-bookCards">\n' +
    '<div class="card">\n' +
    '<a class="book-image" href="#"><img src="'+item.image+'" class="bookImg"></a>\n' +
    '<a href="#" class="bookTitle">'+item.title+'</a>\n' +
    '<h6 class="bookPrice">'+item.price+'</h6>\n' +
    '<button type="button" class="buyNowBtn purchaseButton">Buy Now</a>\n' +
    '<button type="button" class="addCartBtn purchaseButton">Add to Cart</button>\n' +
    "</div>\n" +
    "</div>\n";
  const booksContainer = document.querySelector(".product-display");
  booksContainer.innerHTML += bookHTML;
}

function loadStorageSampleData() {
  if (!localStorage.getItem("items")) {
    const sampleItems = [
      {
        title: "Scripting For N00bs",
        author: "K. Lake",
        price: "$9.99",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat magni minus dolores, ab eveniet aut, architecto dolorum nihil atque officiis commodi necessitatibus distinctio consequuntur laudantium quisquam possimus libero quae eos?",
        isbn: "123",
        publisher: "Luna Attic Publishing",
        pgCount: 69,
        pubDate: "Jan 28, 2022",
        image: "./img/book1.png",
      },
      {
        title: "The Javascript Diet",
        author: "K. Lake",
        price: "$29.99",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat magni minus dolores, ab eveniet aut, architecto dolorum nihil atque officiis commodi necessitatibus distinctio consequuntur laudantium quisquam possimus libero quae eos?",
        isbn: "132",
        publisher: "MadHouse",
        pgCount: 189,
        pubDate: "Jan 28, 2022",
        image: "./img/book2.png",
      },
      {
        title: "The Javascript Diet",
        author: "K. Lake",
        price: "$29.99",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat magni minus dolores, ab eveniet aut, architecto dolorum nihil atque officiis commodi necessitatibus distinctio consequuntur laudantium quisquam possimus libero quae eos?",
        isbn: "134",
        publisher: "MadHouse",
        pgCount: 189,
        pubDate: "Jan 28, 2022",
        image: "./img/book2.png",
      },
    ];

    localStorage.setItem("items", JSON.stringify(sampleItems));
  }
}

function loadCardsListFromProductsController(){
  for(var i = 0, size = itemsController.items.length; i < size ; i++){
      const item = itemsController.items[i];
      addItemCard(item);
  }
}

loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromProductsController();