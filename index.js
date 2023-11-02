const { readJSONFile, writeJSONFile } = require("./src/helpers")
const { findPriceByName, findAuthorByName, findBooksUnderPrice, emptyCart, calculateTotalPrice, updateBookPriceDiscount, removeBook, getBookInfo, displayAllBooks, addBook, seeUserList } = require("./src/booksController.js")



function run() {
  const action = process.argv[2];
  const bookName = process.argv[3];
  let books = readJSONFile("./data", "user'sBooklist.json")
  let library = readJSONFile("./data", "library.json")
  
  switch (action) {
    case "findPriceByName":
      const price = findPriceByName(bookName)
      console.log(price)
      break;
    case "findAuthorByName":
      console.log(findAuthorByName(library, bookName));
      break;
    case "addBook":
      writeJSONFile("data", "user'sBooklist.json", addBook(books, bookName));
      break;
    case "seeUserList":
      console.log(seeUserList(books));
      break;
    case "displayAllBooks":
      displayAllBooks(library);
      break;
    case "getBookInfo":
      console.log(getBookInfo(library, bookName));
      break;
      case "removeBook":
        writeJSONFile("data", "user'sBooklist.json",removeBook(books, bookName));
      break;
      case "updateBookPriceDiscount":
        writeJSONFile("data", "library.json",updateBookPriceDiscount(library, bookName, process.argv[4]));
      break;
      case "calculateTotalPrice":
        calculateTotalPrice(books);
      break;
      case "findBooksUnderPrice":
        findBooksUnderPrice(library, process.argv[3]);
      break;
      case "emptyCart":
        writeJSONFile("data", "user'sBooklist.json", emptyCart(books));
      break;
      
    default:
      console.log("There was an error.");
  }
}
run();