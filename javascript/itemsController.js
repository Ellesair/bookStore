class ProductsController {
  constructor(currentId = 0) {
    this.items = [];
    this.currentId = currentId;
  }

  addItem(title, author, price, description, isbn, publisher, pgCount, pubDate, image) {
    const book = {
      id: this.currentId++,
      title: title,
      author: author,
      price: price,
      description: description,
      isbn: isbn,
      publisher: publisher,
      pgCount: pgCount,
      pubDate: pubDate,
      image: image,
    };
    this.items.push(book);
  }
  
  loadItemsFromLocalStorage() {
    const storageItems = localStorage.getItem("items");
    if (storageItems) {
      const items = JSON.parse(storageItems);
      for (var i = 0; i < items.length; i++){

        const book = items[i];
        this.items.push(book);
      }
    }
  }
}

