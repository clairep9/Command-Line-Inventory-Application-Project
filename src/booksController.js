const { nanoid } = require("nanoid")
const { readJSONFile, writeJSONFile } = require("./helpers")
const chalk = require("chalk")
let library = readJSONFile("./data", "library.json")



function findPriceByName(library, bookName) {
    const foundBook = library.find(book => book.name === bookName);
    return foundBook.priceInCents;   
}

function findAuthorByName(library, bookName) {
    const foundBook = library.find(book => book.name === bookName);
    return foundBook.author;   
}

function addBook(books, bookName) {
    const bookPrice = findPriceByName(library, bookName); 
    const bookAuthor = findAuthorByName(library, bookName);
    const book = {
        name: bookName,
        author: bookAuthor,
        id: nanoid(4),
        price: bookPrice
    };

    books.push(book);
    return(books);
}

function seeUserList(books) {
    return books.map((book) => book);
}

function displayAllBooks(library) {
    library.forEach((book) => {
        console.log(`Name: ${book.name}`);
        console.log(`Author: ${book.author}`);
        console.log(`Price: $${(book.priceInCents / 100).toFixed(2)}`);
        console.log(`In Stock: ${book.inStock ? 'Yes' : 'No'}`);
        console.log(`Genre: ${book.genre}`);
        console.log('-------------------------');
    });
}

function getBookInfo(library, bookName) {
    return library.find((book) => book.name === bookName)
}

function removeBook(books, bookName) {
    const bookIndex = books.findIndex((book) => book.name === bookName);
  
    if (bookIndex > -1) {
      books.splice(bookIndex, 1);
      console.log(`Book '${bookName}' has been successfully removed from your list.`);
      return books
    } else {
      console.log(`Error. Book '${bookName}' not found.`);
    }
  }


function updateBookPriceDiscount(library, bookName, discountPercentage) {
  const index = library.findIndex((book) => book.name === bookName);

  if (index !== -1) {
    let book = library[index];
    let discount = book.priceInCents - (book.priceInCents * (discountPercentage / 100));
    book.priceInCents = parseFloat(discount.toFixed(2));

    console.log(`Price of '${bookName}' has been updated.`);
  } else {
    console.log(`Error. Book '${bookName}' not found.`);
  }
  return library
}

  function calculateTotalPrice(books) {
    let totalPrice = 0; 
    books.forEach((book) => {
      console.log(book)
      console.log(`${book.name} is $${book.price.toFixed(2)}`)
      totalPrice += book.price;
    }); 
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);
  }

  function emptyCart(books) {
    books.length = 0
    console.log('Your cart is now empty.')
    return books
  }

  
  function findBooksUnderPrice(library, maxPrice) {
    console.log(library.filter((book) => book.priceInCents.toFixed(2) < maxPrice));
  }
  

  module.exports = {findPriceByName, findAuthorByName, findBooksUnderPrice, emptyCart, calculateTotalPrice, updateBookPriceDiscount, removeBook, getBookInfo, displayAllBooks, addBook, seeUserList}