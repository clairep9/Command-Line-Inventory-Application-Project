# Command-Line-Inventory-Application-Project
This is a library store. Inside the 'data' folder, there is a list of thr books the library owns and a list of books the user wants to check out. 
Inside the 'src' folder, all the actions the clerk can execute(according to the user's demands) are defined in booksController. Helpers.js contains the functions needed to read and write json file. 
Inside the 'index' folder is the final execution. Depending on what is written in the terminal(process.argv), the computer will use it to determine which function to run. 



-function findPriceByName and function findAuthorByName are used in function addBook to add a book to the user's booklist by using whatever book title the user says. 
-function SeeUserList shows the user's current booklist.
-function displayAllBooks displays info(i.e name, price, instock, genre) on all the books the library has. 
-function getBookInfo is to get info on a specific book by using the book's title.
-function removeBook remove a specific book from the user's booklist.
-function updateBookPriceDiscount updates the price on a book in the library folder. This can happen when the store has a sale.
-function calculateTotalPrice tells the user the price of each book in his list then tallies them up for the total price. 
-function emptyCart deletes the user's booklist.
-function findBooksUnderPrice return all the books under whatever price the user requests. 

**If after running a function, the library.json updates to one single line, right click inside the document and select 'Format Document'**